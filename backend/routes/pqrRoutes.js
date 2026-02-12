const express = require("express");
const router = express.Router();
const controller = require("../controllers/pqrController");

router.post("/crear", controller.crear);

module.exports = router;
