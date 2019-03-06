const express = require("express");

const ResourceController= require("../controllers/resource");

const router = express.Router();

router.post("/createResource", ResourceController.createResource);

router.post("/readResource", ResourceController.readResource);

module.exports = router;
