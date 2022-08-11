const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", async (req, res) => {
  res.send("FT & NFT Airdrop");
});

router.post("/add", async (req, res) => {
  await userController.add_user(req.body.account);
  res.send("Success");
});

module.exports = router;
