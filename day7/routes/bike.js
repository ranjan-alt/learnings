const express = require("express");
const {
  getBikeController,
  addBikeController,
} = require("../controllers/bikeController");

// router
// router ka object kaise nikate hai ans---> router object xpress se nikalte hain

const router = express.Router();

router.get("/:id", getBikeController);
router.post("/addBikes", addBikeController);

module.exports = router;
