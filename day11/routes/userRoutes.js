const express = require("express");

const router = express.Router();

const {
  userController,
  registerUser,
} = require("../controllers/userController");

router.get("/:id", userController);
router.post("/register", registerUser);

module.exports = router;
