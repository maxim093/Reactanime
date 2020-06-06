var express = require("express");
var router = express.Router();
const List = require("../models/list");

// Insert new Watchlist
router.post("/", async (req, res) => {
  const list = new List({
    title: req.body.title,
  });

  try {
    const savedList = await list.save();
    res.json({ message: "Liste gespeichert!" });
  } catch (err) {
    res.json({ message: err });
  }
});

// Gett all Watchlists
router.get("/", async (req, res) => {
  try {
    const list = await List.find();
    res.json(list);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update current List
router.put("/:id/:animeId", async (req, res) => {
  const list = await List.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { animeIds: req.params.animeId } }
  );
});
module.exports = router;
