const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const getAllRoutes = require("./routes/indexPageRoutes");
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");
const adminPageRoutes = require("./routes/adminPageRoutes");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());


app.use("/", getAllRoutes);
app.use("/", projectRoutes);
app.use("/", skillRoutes);
app.use("/", adminPageRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server has started on port ${PORT}`));
