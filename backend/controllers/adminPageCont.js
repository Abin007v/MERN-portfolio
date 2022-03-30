const profileImage = require("../models/profileImageModel");
const aboutImage = require("../models/aboutImageModel");
const aboutText = require("../models/aboutTextModle");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const Resume = require("../models/resumeModel");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const delteCatogory = async (req, res) => {
  res.json({ data: "delte catogory" });
};

const uploadProfileImage = async (req, res) => {
  const { profileImg } = req.body;
  if (!profileImg) {
    res.status(400);
    throw new Error("please provide image");
  } else {
    const proimg = new profileImage({ image: profileImg });
    const proimgUploaded = await proimg.save();

    res.status(201).json(proimgUploaded);
  }
};

const uploadAboutImage = async (req, res) => {
  const { aboutImg } = req.body;
  if (!aboutImg) {
    res.status(400);
    throw new Error("please provide image");
  } else {
    const aboutimgobj = new aboutImage({ image: aboutImg });
    const aboutImgUploaded = await aboutimgobj.save();

    res.status(201).json(aboutImgUploaded);
  }
};

const updateProfileImage = async (req, res) => {
  const { img } = req.body;
  const profileimg = await profileImage.findById(req.params.id);
  if (!profileimg) {
    throw new Error("no profile image with this id");
  } else {
    profileimg.image = img;
    await profileimg.save();
    res.status(201).json(profileimg);
  }
};
const updateAboutImage = async (req, res) => {
  const { img } = req.body;
  const aboutimg = await aboutImage.findById(req.params.id);
  if (!aboutimg) {
    throw new Error("no about image with this id");
  } else {
    aboutimg.image = img;
    await aboutimg.save();
    res.status(201).json(aboutimg);
  }
};
const uploadText = async (req, res) => {
  const { text } = req.body;
  if (text === "") {
    throw new Error("please provide text");
  } else {
    const textobj = new aboutText({ aboutText: text });
    const textData = await textobj.save();
    res.status(201).json({ textData });
  }
};

const updateText = async (req, res) => {
  const { text } = req.body;
  const aboutTxt = await aboutText.findById(req.params.id);
  if (!aboutTxt) {
    throw new Error("no aboutText with this id");
  } else {
    aboutTxt.aboutText = text;
    await aboutTxt.save();
    res.status(201).json(aboutTxt);
  }
};

const uploadResume = async (req, res) => {
  const { link } = req.body;
  if (!link) {
    throw new Error("provoid a link");
  } else {
    const linkObj = new Resume({ link: link });
    const resume = await linkObj.save();
    res.status(201).json(resume);
  }
};

const updateResume = async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  const { link } = req.body;
  if (!resume) {
    throw new Error("no resume with this id");
  } else {
    resume.link = link;
    await resume.save();
    res.status(201).json(resume);
  }
};

const registerUser = async (req, res) => {
  const { email, pass } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("user already exists");
  } else {
    if (!email || !pass) {
      throw new Error("please provoid email and pass");
    } else {
      const user = new User({ email: email, password: pass });
      await user.save();
      res.status(201).json(user);
    }
  }
};

const loginUser = async (req, res) => {
  const { email, pass } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(pass))) {
    res.status(201).json({
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ msg: "invalid info" });
  }
};

module.exports = {
  delteCatogory,
  uploadProfileImage,
  uploadAboutImage,
  updateProfileImage,
  updateAboutImage,
  uploadText,
  updateText,
  uploadResume,
  updateResume,
  registerUser,
  loginUser,
};
