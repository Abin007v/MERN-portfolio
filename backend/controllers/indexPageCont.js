const Skills = require("../models/skillModel");
const Project = require("../models/projectModel");
const ProfileImage = require("../models/profileImageModel");
const AboutImage = require("../models/aboutImageModel");
const AboutText = require("../models/aboutTextModle");
const Resume = require("../models/resumeModel");

const getAll = async (req, res) => {
  const profileImage = await ProfileImage.findOne();
  const aboutImage = await AboutImage.findOne();
  const skills = await Skills.find();
  const project = await Project.find();
  const aboutText = await AboutText.findOne();
  const resume = await Resume.findOne();
  res.json({
    data: {
      profileImage: profileImage,
      aboutImage: aboutImage,
      skill: skills,
      project: project,
      aboutText: aboutText,
      resume: resume,
    },
  });
};

const adminVerify = async (req, res) => {
  res.json({ data: "admin veryfy route" });
};

const singleProject = async (req, res) => {
  const singlePro = await Project.findById(req.params.id);
  if (singlePro) {
    res.status(201).json(singlePro);
  } else {
    res.json({ message: "no project with this id" });
  }
};

module.exports = {
  getAll,
  adminVerify,
  singleProject,
};
