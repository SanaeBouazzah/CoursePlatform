// hashOld.js
require("dotenv").config(); // Load .env first
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User"); // adjust path if needed

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected!");
    hashOldUsers(); // call function after successful connection
  })
  .catch(err => console.error("MongoDB connection error:", err));

async function hashOldUsers() {
  try {
    // Find users with a password field
    const users = await User.find({ password: { $exists: true } });
    
    for (const user of users) {
      // Only hash if not already hashed (length < 60 is typical for bcrypt)
      if (user.password.length < 60) {
        user.password = await bcrypt.hash(user.password, 10);
        await user.save();
        console.log(`User ${user.email} hashed`);
      }
    }

    console.log("All old users hashed!");
    mongoose.disconnect(); // Close connection
  } catch (err) {
    console.error("Error hashing users:", err);
  }
}