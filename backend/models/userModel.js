const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await (enteredPassword == this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
