const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }, 
  projectDesc: {
    type: String,
    required: true,
  },
  projectGitLink: {
    type: String,
    required: true,
  },
  liveProjectLink: {
    type: String,
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
