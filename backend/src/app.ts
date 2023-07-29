require("dotenv").config();
import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(json());

app.listen(4000, () => {
  console.log("Server running on port 4000!");
});
