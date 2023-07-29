const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  imgURL: {
    type: String,
  },
  name: {
    type: String,
  },
  number: {
    type: String,
  },
  born: {
    type: String,
  },
  age: {
    type: String,
  },
  nationality: {
    type: String,
  },
  position: {
    type: String,
  },
  club: {
    type: String,
  },
});

module.exports = mongoose.model("Player", PlayerSchema);
