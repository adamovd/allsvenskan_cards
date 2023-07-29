require("dotenv").config();
import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(json());

const port = process.env.PORT || 5000;
async function run() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(
      process.env.MONGO_CONNECTION_STRING as string
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

run();
