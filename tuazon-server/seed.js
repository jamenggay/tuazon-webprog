require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/Users");

const users = [
  {
    firstName: "Shuna",
    lastName: "Tempest",
    age: "23",
    gender: "Female",
    contactNumber: "09123456787",
    email: "shuna@tempest.com",
    type: "admin",
    username: "chefshuna_",
    password: "shuna&04",
    address: "Jura Tempest Federation",
    isActive: true,
  },
  {
    firstName: "Rimuru",
    lastName: "Tempest",
    age: "24",
    gender: "Male",
    contactNumber: "09123456788",
    email: "rimuru@tempest.com",
    type: "editor",
    username: "rimuru@slime",
    password: "slime&tempest_23",
    address: "Jura Tempest Federation",
    isActive: true,
  },
  {
    firstName: "Veldora",
    lastName: "Tempest",
    age: "23",
    gender: "Male",
    contactNumber: "09123456787",
    email: "veldora@tempest.com",
    type: "viewer",
    username: "stormdragon08",
    password: "rawr&jura123",
    address: "Jura Tempest Federation",
    isActive: true,
  },
];

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected!");

    for (const userData of users) {
      const exists = await User.findOne({ email: userData.email });
      if (exists) {
        console.log(`⚠️  Skipping ${userData.email} — already exists.`);
        continue;
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);
      await User.create({ ...userData, password: hashedPassword });
      console.log(`✅  Created user: ${userData.firstName} ${userData.lastName} (${userData.type})`);
    }

    console.log("\nDone seeding!");
  } catch (err) {
    console.error("❌ Seed error:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

seed();
