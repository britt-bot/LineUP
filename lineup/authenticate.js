const passport = require("passport")
const jwt = require("jsonwebtoken")
const dev = process.env.NODE_ENV !== "production"

exports.COOKIE_OPTIONS = {
    httpOnly: true,
    // Since localhost is not having https protocol,
    // secure cookies do not work correctly (in postman)
    secure: !dev,
    signed: true,
    maxAge: 2592000,
    sameSite: "none",
}

exports.getToken = user => {
    console.log("Get Token")
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: eval(process.env.SESSION_EXPIRY),
    })
}

exports.getRefreshToken = user => {
    console.log("Refresh Token")
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: eval(process.env.REFRESH_TOKEN_EXPIRY),
    })
    return refreshToken
}

exports.verifyUser = passport.authenticate("jwt", { session: false })