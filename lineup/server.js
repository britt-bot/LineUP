const express = require("express");
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(
    session({
        //secret: process.env.SECRET,
        secret: "Deez",
        resave: false,
        saveUninitialized: true,
    })
);
passport.use(new LocalStrategy(
   function (username, password, done) {
       User.findOne({ username: username }, function (err, user) {
           if (err) { return done(err); }
           if (!user) {
               return done(null, false, { message: 'Incorrect username.' });
           }
           if (!user.validPassword(password)) {
               return done(null, false, { message: 'Incorrect password.' });
           }
           return done(null, user);
       });
   }
));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lineuplist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});