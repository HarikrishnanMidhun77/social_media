const express = require("express");
const router = express.Router();

router.get("/test", () => console.log("posts work!"));

module.exports = router;
