const mongoose = require("mongoose");

const connectDB = async () => {
  const con = await mongoose.connect(process.env.MONGO_URI);
  console.log(`mongoDB Connected: ${con.connection.host}`);
};

module.exports = connectDB;
