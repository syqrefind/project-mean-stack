const express = require("express");

const ResourceController= require("../controllers/resource");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/createResource", ResourceController.createResource);
router.post("/createObject", ResourceController.createObject);
router.get("/readResourceViaGet/:start-:end", ResourceController.readResourceViaGet);
router.get("/readResource/:title.:start-:end", checkAuth, ResourceController.readResource);
router.post("/updateResource", ResourceController.updateResource);
router.post("/deleteResource", ResourceController.deleteResource);

module.exports = router;
