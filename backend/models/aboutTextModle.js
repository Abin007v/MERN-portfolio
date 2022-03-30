const mongoose = require("mongoose");

const aboutTextSchema = mongoose.Schema({
  aboutText: {
    type: String,
    requied: true,
  },
});

const AboutText = mongoose.model("AboutText", aboutTextSchema);
module.exports = AboutText;
