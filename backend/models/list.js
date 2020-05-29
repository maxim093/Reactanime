const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  animeIDs: [
    {
      animeID: {
        type: String,
      },
    },
  ],
  date: {
    //should be date
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("List", ListSchema);
