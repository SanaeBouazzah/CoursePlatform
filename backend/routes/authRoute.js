const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "Name, email, password, and role are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password, role });
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      message: "Registration successful",
      user: { _id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role },
      token
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Registration failed", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid email or password" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET || "secretkey",
    { expiresIn: "1h" }
  );

  res.status(200).json({
    message: "Login successful",
    user: { _id: user._id, name: user.name, email: user.email, role: user.role },
    token
  });
});

module.exports = router;