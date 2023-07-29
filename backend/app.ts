require("dotenv").config();
import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const playerRoutes = require("./routes/playerRoutes");

const app = express();
app.use(json());
app.use(
  cors({
    origin: [
      "http://127.0.0.1:5173",
      "http://localhost:5173",
      "http://127.0.0.1:5174",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use((req, res, next) => {
  console.log(`Processing ${req.method} request to ${req.path}`);
  next();
});

app.use("/api/v1/players", playerRoutes);

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
