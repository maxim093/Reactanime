const mongoose = require("mongoose");

const AnimesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  release: {
    //should be date
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Animes", AnimesSchema);
