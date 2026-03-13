const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt:", email, password); // <- debug

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid email or password" });

  const isMatch = await bcrypt.compare(password, user.password);
  console.log("Password match:", isMatch); // <- debug
  if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

  // Generate token
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