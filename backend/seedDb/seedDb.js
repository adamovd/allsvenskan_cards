require("dotenv").config();
const mongoose = require("mongoose");
const Player = require("../models/Player.ts");
const { PlayerData } = require("./players.ts");

const seedDb = async (connectionString) => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(connectionString);
    console.log(`🎇 MongoDB connected: ${conn.connection.host}`);

    await Player.deleteMany();

    await Player.create(PlayerData);

    console.log("Database succesfully populated with players");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

seedDb(process.env.MONGO_CONNECTION_STRING);
