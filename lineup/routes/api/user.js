const express = require("express")
const router = express.Router()
const User = require("../../models/user")
const passport = require("passport");
const jwt = require("jsonwebtoken");
const alert = require("alert");
const {
  getToken,
  COOKIE_OPTIONS,
  getRefreshToken,
  verifyUser,
} = require("../../authenticate");

router.post("/add", (req, res, next) => {
  // Verify that first name is not empty
  console.log("Add");
  console.log(req.body.email);
  /*    console.log(req);*/
  if (!req.body.firstName) {
    res.statusCode = 500;
    res.send({
      name: "FirstNameError",
      message: "The first name is required",
    });
  } else {
    console.log("else");
    User.register(
      new User({ email: req.body.email }),
      req.body.password,
      (err, user) => {
        if (err) {
          res.statusCode = 500;
          console.log("PostPasswordError", err);
          res.send(err);
        } else {
          user.firstName = req.body.firstName;
          user.lastName = req.body.lastName || "";
          const token = getToken({ _id: user._id });
          const refreshToken = getRefreshToken({ _id: user._id });
          user.refreshToken.push({ refreshToken });
          user.save((err, user) => {
            if (err) {
              res.statusCode = 500;
              console.log("PostSaveError", err);
              res.send(err);
            } else {
              console.log(user);
              res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
              res.send({ success: true, token });
              alert("You have created an account!");
            }
          });
        }
      }
    );
  }
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
    console.log("Login");
    console.log(req);
    const token = getToken({ _id: req.user._id });
    const refreshToken = getRefreshToken({ _id: req.user._id });
    const _id = req.user._id;
    User.findById(req.user._id).then(
        (user) => {
            user.refreshToken.push({ refreshToken });
            user.save((err, user) => {
                if (err) {
                    res.statusCode = 500;
                    res.send(err);
                } else {
                    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
                    res.send({ success: true, token, _id});
                }
            });
        },
        (err) => next(err)
    );
});

router.post("/favorite", (req, res, next) => {
    console.log("favorite");
    const userID = req.body._id
    console.log(userID);
    User.findById(userID).then(
        (user) => {
            console.log(user);
            user.favorites.push (req.body.favorites)
            user.save((err, user) => {
                if (err) {
                    console.log("Save error")
                    res.statusCode = 500;
                    res.send(err);
                } else {
                    res.send({ success: true });
                }
            });
        },
        (err) => {
        // next(err)
        console.log(err)
        }
    );
});

router.post("/refreshToken", (req, res, next) => {
  const { signedCookies = {} } = req;
  const { refreshToken } = signedCookies;

  if (refreshToken) {
    try {
      const payload = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );
      const userId = payload._id;
      User.findOne({ _id: userId }).then(
        (user) => {
          if (user) {
            // Find the refresh token against the user record in database
            const tokenIndex = user.refreshToken.findIndex(
              (item) => item.refreshToken === refreshToken
            );

            if (tokenIndex === -1) {
              res.statusCode = 401;
              res.send("Unauthorized");
            } else {
              const token = getToken({ _id: userId });
              // If the refresh token exists, then create new one and replace it.
              const newRefreshToken = getRefreshToken({ _id: userId });
              user.refreshToken[tokenIndex] = { refreshToken: newRefreshToken };
              user.save((err, user) => {
                if (err) {
                  res.statusCode = 500;
                  res.send(err);
                } else {
                  res.cookie("refreshToken", newRefreshToken, COOKIE_OPTIONS);
                  res.send({ success: true, token });
                }
              });
            }
          } else {
            res.statusCode = 401;
            res.send("Unauthorized");
          }
        },
        (err) => next(err)
      );
    } catch (err) {
      res.statusCode = 401;
      res.send("Unauthorized");
    }
  } else {
    res.statusCode = 401;
    res.send("Unauthorized");
  }
});

router.get("/me", (req, res, next) => {
    res.send(req.user);
});

router.get("/logout", verifyUser, (req, res, next) => {
  const { signedCookies = {} } = req;
  const { refreshToken } = signedCookies;
  User.findById(req.user._id).then(
    (user) => {
      const tokenIndex = user.refreshToken.findIndex(
        (item) => item.refreshToken === refreshToken
      );
      if (tokenIndex !== -1) {
        user.refreshToken.id(user.refreshToken[tokenIndex]._id).remove();
      }
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.send(err);
        } else {
          res.clearCookie("refreshToken", COOKIE_OPTIONS);
          res.send({ success: true });
        }
      });
    },
    (err) => next(err)
  );
});

module.exports = router;
