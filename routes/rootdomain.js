const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  //   console.log(req.vhost);
  res.send("This is the root domain " + req.vhost.hostname);
});

module.exports = router;
