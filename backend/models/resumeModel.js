const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
});

const Resume = mongoose.model("Resume", resumeSchema);
module.exports = Resume;
