const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
  name: {
    type: String,
    requied: true,
  },
  skillAtributes: [
    {
      skillname: {
        type: String,
      },
      valueclass: {
        type: String,
      },
      valueper: {
        type: String,
      },
      percentage: {
        type: String,
      },
    },
  ],
});

const Skills = mongoose.model("Skill", skillSchema);
module.exports = Skills;
