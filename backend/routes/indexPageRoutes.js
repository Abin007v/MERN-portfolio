const express = require("express");
const {
  getAll,
  singleProject,
  adminVerify,
} = require("../controllers/indexPageCont");

const router = express.Router();

router.route("/getMainPagedata").get(getAll);
router.route("/adminverify").get(adminVerify);
router.route("/projects/:id").get(singleProject);

module.exports = router;
