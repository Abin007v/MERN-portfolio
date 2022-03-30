const mongoose = require("mongoose");

const profileImageSchema = mongoose.Schema({
  image: {
    type: String,
    requied: true,
  },
});

const ProfileImgae = mongoose.model("ProfileImage", profileImageSchema);
module.exports = ProfileImgae;
