const Skills = require("../models/skillModel");

const delteSingleSkill = async (req, res) => {
  const skill = await Skills.findById(req.params.id);
  if (!skill) {
    throw new Error("no skill with this id");
  } else {
    var index = 0;
    for (var i = 0; i < skill.skillAtributes.length; i++) {
      if (skill.skillAtributes[i]._id == req.params.DBid) {
        index = i;
        break;
      }
    }
    console.log(index);
    skill.skillAtributes.splice(index, 1);
    const updatedObj = await skill.save();
    res.status(201).json(updatedObj);
  }
};

const catDelete = async (req, res) => {
  const cat = await Skills.findById(req.params.id);
  if (!cat) {
    throw new Error(" no cat with this id");
  } else {
    await cat.remove();
    res.status(201).json("removed catogory");
  }
};

const updateSingleSkill = async (req, res) => {
  const { skillname, valueclass, percentage, valueper } = req.body;
  const skill = await Skills.findById(req.params.id);
  skill.skillAtributes = await skill.skillAtributes.map((item) => {
    if (item._id == req.params.DBid) {
      (item.skillname = skillname),
        (item.valueclass = valueclass),
        (item.percentage = percentage),
        (item.valueper = valueper);
      return item;
    } else {
      return item;
    }
  });
  const updatedObj = await skill.save();
  res.status(201).json(updatedObj);
};

const getSingleSkill = async (req, res) => {
  const skill = await Skills.findById(req.params.id);
  const obj = await skill.skillAtributes.filter((item) => {
    if (item._id == req.params.DBid) {
      return item;
    }
  });
  res.status(201).json(obj);
};

const getSkill = async (req, res) => {
  const skill = await Skills.findById(req.params.id);
  if (!skill) {
    throw new Error("no skill with this id");
  } else {
    res.status(201).json(skill);
  }
};
const addSkillCatogory = async (req, res) => {
  const { catName } = req.body;
  if (!catName) {
    throw new Error("please proviod catName");
  } else {
    const skillObj = new Skills({ name: catName });
    const skillData = await skillObj.save();
    res.status(201).json({ skillData });
  }
};
const createSkill = async (req, res) => {
  const { skillname, valueclass, percentage, valueper } = req.body;
  const skill = await Skills.findById(req.params.id);
  if (!skill) {
    throw new Error("no sklll with this id");
  } else {
    const skillAtObj = {
      skillname: skillname,
      valueclass: valueclass,
      percentage: percentage,
      valueper: valueper,
    };
    skill.skillAtributes.push(skillAtObj);
    const updatedSkill = await skill.save();
    res.status(201).json(updatedSkill);
  }
};
const getAllskill = async (req, res) => {
  res.json({ data: " get all skills" });
};
module.exports = {
  delteSingleSkill,
  updateSingleSkill,
  getSkill,
  getSingleSkill,
  addSkillCatogory,
  createSkill,
  getAllskill,
  catDelete,
};
