const express = require("express");
const { companyController } = require("../controllers/company");

const router = express.Router();

router.get("/:id", companyController);

module.exports = router;
