const express = require("express");
const { singleProject } = require("../controllers/indexPageCont");
const {
  createNewProject,
  updateProject,
  delteSingleProject,
} = require("../controllers/projectContreller");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
router
  .route("/projects/edit/:id")
  .get(protect, singleProject)
  .put(protect, updateProject)
  .delete(delteSingleProject);
router.route("/projects/addproject").post(protect, createNewProject);

module.exports = router;
