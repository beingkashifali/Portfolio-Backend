const express = require("express");
const sendMessage = require("../controllers/Contact");
const router = express.Router();

router.post("/send-email", sendMessage);

module.exports = router;
