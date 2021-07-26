const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/*const passport = require('passport');*/
const passportLocalMongoose = require("passport-local-mongoose")

const Session = new Schema({
    refreshToken: {
        type: String,
        default: "",
    },
})

const User = new Schema({
    firstName: {
        type: String,
        default: "",
    },
    lastName: {
        type: String,
        default: "",
    },
    favorites: {
        type: [String],
        default: []
    },
    authStrategy: {
        type: String,
        default: "local",
    },
    points: {
        type: Number,
        default: 50,
    },
    refreshToken: {
        type: [Session],
    },
})

/*const User = mongoose.model("User", userSchema);*/

User.set("toJSON", {
    transform: function (doc, ret, options) {
        delete ret.refreshToken
        return ret
    },
})

User.plugin(passportLocalMongoose, { usernameField: 'email' })

module.exports = mongoose.model("User", User);