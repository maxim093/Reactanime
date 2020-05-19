var express = require("express");
var router = express.Router();
const Animes = require("../models/animes");

router.get("/", async (req, res) => {
  try {
    const animes = await Animes.find();
    res.json(animes);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
