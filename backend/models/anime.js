const mongoose = require("mongoose");

const AnimesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
      },
})


module.exports = mongoose.model("Animes", AnimesSchema);