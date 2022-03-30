const { default: mongoose } = require("mongoose");
const Project = require("../models/projectModel");

const updateProject = async (req, res) => {
  const { image, name, desc, GitLink, LiveLink } = req.body;
  const SingleProject = await Project.findById(req.params.id);
  if (!SingleProject) {
    throw new Error("no project with this id");
  } else {
    (SingleProject.title = name),
      (SingleProject.image = image),
      (SingleProject.projectDesc = desc),
      (SingleProject.projectGitLink = GitLink),
      (SingleProject.liveProjectLink = LiveLink);
    const updatedProject = await SingleProject.save();
    res.status(201).json(updatedProject);
  }
};

const createNewProject = async (req, res) => {
  const { title, image, projectDesc, projectGitLink, liveProjectLink } =
    req.body;
  if (!title || !image || !projectDesc || !projectGitLink || !liveProjectLink) {
    throw new Error("please provide all info");
  } else {
    const projectObj = new Project({
      title: title,
      image: image,
      projectDesc: projectDesc,
      projectGitLink: projectGitLink,
      liveProjectLink: liveProjectLink,
    });
    const projectData = await projectObj.save();
    res.status(201).json({ projectData });
  }
};

const delteSingleProject = async (req, res) => {
  const SingleProject = await Project.findById(req.params.id);
  if (!SingleProject) {
    throw new Error("no project with this id");
  } else {
    await SingleProject.remove();
    res.status(201).json({ message: "delted succesFully" });
  }
};

module.exports = {
  updateProject,
  createNewProject,
  delteSingleProject,
};
