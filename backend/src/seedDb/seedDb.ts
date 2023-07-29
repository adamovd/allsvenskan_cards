require("dotenv").config();
const mongoose = require("mongoose");
const Player = require("../models/Player");
const { PlayerData } = require("./players");

const seedDb = async (connectionString: string) => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(connectionString);
    console.log(`🎇 MongoDB connected: ${conn.connection.host}`);

    await Player.deleteMany();

    await Player.create(PlayerData);

    console.log("Database succesfully populated with products");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

seedDb(process.env.MONGO_CONNECTION_STRING as string);
