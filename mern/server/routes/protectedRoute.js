const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.get("/profile", verifyToken, (req, res) => {
  res.send(`Welcome, ${req.user.email}`);
});

module.exports = router;
