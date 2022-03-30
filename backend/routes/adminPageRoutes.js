const express = require("express");
const {
  delteCatogory,
  updateProfileImage,
  updateAboutImage,
  uploadProfileImage,
  uploadAboutImage,
  updateText,
  uploadText,
  uploadResume,
  updateResume,
  registerUser,
  loginUser,
} = require("../controllers/adminPageCont");
const { getAll } = require("../controllers/indexPageCont");

const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/adminpage").get(protect, getAll).delete(delteCatogory);
router
  .route("/adminpage/proimg/:id")
  .post(protect, uploadProfileImage)
  .put(protect, updateProfileImage);
router
  .route("/adminpage/abtimg/:id")
  .post(protect, uploadAboutImage)
  .put(protect, updateAboutImage);
router
  .route("/adminpage/abouttext/:id")
  .post(protect, uploadText)
  .put(protect, updateText);
router
  .route("/resume/:id")
  .post(protect, uploadResume)
  .put(protect, updateResume);
router.route("/user/register").post(registerUser);
router.route("/user/login").post(loginUser);
module.exports = router;
