const express = require("express");
var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define middleware here
require("dotenv").config;
require("./utils/connectdb");
require("./strategies/jwtStrategies");
require("./strategies/localStrategies");
require("./authenticate");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(passport.initialize());
app.use(passport.session());
mongoose.set("useFindAndModify", false);
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];

//const corsOptions = {
//    origin: function (origin, callback) {
//        if (!origin || whitelist.indexOf(origin) !== -1) {
//            callback(null, true);
//        } else {
//            console.log(origin);
//            callback(new Error("Not allowed by CORS"));
//        }
//    },

//    credentials: true,
//};

/*app.use(cors(corsOptions));*/

app.use(passport.initialize());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
/*mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lineuplist");*/

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//const server = app.listen(process.env.PORT || 8081, function () {
//    const port = server.address().port;

//    console.log("App started at port:", port);
//});
