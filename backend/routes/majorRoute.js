const express = require("express");
const router = express.Router();
const Major = require("../models/Major");

// GET all majors
router.get("/", async (req, res) => {
  try {
    const majors = await Major.find();
    res.json(majors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single major by ID
router.get("/:id", async (req, res) => {
  try {
    const major = await Major.findById(req.params.id);
    res.json(major);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create a new major
router.post("/", async (req, res) => {
  try {
    const major = new Major(req.body);
    await major.save();
    res.json(major);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update a major
router.put("/:id", async (req, res) => {
  try {
    const major = await Major.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(major);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a major
router.delete("/:id", async (req, res) => {
  try {
    await Major.findByIdAndDelete(req.params.id);
    res.json({ message: "Major deleted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;