const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const festivalSchema = new Schema({
  festivalName: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
});

const Festival = mongoose.model("Festival", festivalSchema);

module.exports = Festival;