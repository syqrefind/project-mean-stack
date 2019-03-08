const express = require("express");

const ResourceController= require("../controllers/resource");

const router = express.Router();

router.post("/createResource", ResourceController.createResource);

// @Deprecated: Please dont't use this POST route to read
router.post("/readResource", ResourceController.readResource);

// router.get("/readResource", ResourceController.readResourceViaGet);

router.get("/readResourceViaGet/:start-:end", ResourceController.readResourceViaGet);

// get - readProject
// router.get("/readProject/:project:start-:end", ResourceController.readProject);

// post - create or update resource data 

// post - create or update project data

module.exports = router;
