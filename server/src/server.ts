require("dotenv").config();
require("express-async-errors");
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from "./utils/connectDb";
import authRoute from "./view/authRoute";
import adminRoute from "./view/adminRoute";

connectDb();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);

mongoose.connection.once("open", () => {
  console.log("Connected to db!");
  app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
