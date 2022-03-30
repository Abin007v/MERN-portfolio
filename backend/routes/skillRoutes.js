const express = require("express");
const {
  updateSingleSkill,
  delteSingleSkill,
  getSkill,
  createSkill,
  addSkillCatogory,
  getSingleSkill,
  catDelete,
} = require("../controllers/skillController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.route("/skill/edit/:id").get(protect, getSkill).delete(catDelete);
router
  .route("/editsingleskill/:id/:DBid")
  .get(protect, getSingleSkill)
  .put(protect, updateSingleSkill)
  .delete(delteSingleSkill);
router.route("/skill/addskill/:id").post(protect, createSkill);
router.route("/addskill/catogory").post(protect, addSkillCatogory);
module.exports = router;
