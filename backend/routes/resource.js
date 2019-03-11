const express = require("express");

const ResourceController= require("../controllers/resource");

const router = express.Router();

router.post("/createResource", ResourceController.createResource);
router.post("/createObject", ResourceController.createObject);
router.get("/readResourceViaGet/:start-:end", ResourceController.readResourceViaGet);
router.get("/readResource/:title.:start-:end", ResourceController.readResource);
router.post("/updateResource", ResourceController.updateResource);
router.post("/deleteResource", ResourceController.deleteResource);

module.exports = router;
