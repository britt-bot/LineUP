const passport = require("passport")
const JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt
const User = require("../models/user")
require('dotenv').config();

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

// Used by the authenticated requests to deserialize the user,
// i.e., to fetch user details from the JWT.
passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
        console.log("Anything?")
        // Check against the DB only if necessary.
        // This can be avoided if you don't want to fetch user details in each request.
        User.findOne({ _id: jwt_payload._id }, function (err, user) {
            if (err) {
                return done(err, false, {message: "number 1"})
            }
            if (user) {
                console.log("User ")
                return done(null, user, {message: "number 2"})
            } else {
                return done(null, false, {message: "number 3"})
                // or you could create a new account
            }
        })
    })
)