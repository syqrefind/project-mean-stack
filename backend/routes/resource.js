const express = require("express");

const ResourceController= require("../controllers/resource");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/createResource", checkAuth, ResourceController.createResource);
router.post("/createObject", checkAuth, ResourceController.createObject);
router.get("/readResourceViaGet/:start-:end", checkAuth, ResourceController.readResourceViaGet);
router.get("/readResource/:title.:start-:end", checkAuth, ResourceController.readResource);
router.post("/updateResource", checkAuth, ResourceController.updateResource);
router.post("/deleteResource", checkAuth, ResourceController.deleteResource);

module.exports = router;
