const mongoose = require("mongoose");

const aboutImageSchema = mongoose.Schema({
  image: {
    type: String,
    requied: true,
  },
});

const AboutImgae = mongoose.model("AboutImage", aboutImageSchema);
module.exports = AboutImgae;
