const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  animeIds: {
    type: Array,
  },
  date: {
    //should be date
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("List", ListSchema);
