var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      id: 1,
      title: "My Hero Academia",
    },
    {
      id: 2,
      title: "Demon Slayer",
    },
    {
      id: 3,
      title: "Cowboy Beepop",
    },
  ]);
});

module.exports = router;
