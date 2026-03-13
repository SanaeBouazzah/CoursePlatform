const express = require("express");
const router = express.Router();
const Semester = require("../models/Semester");

// GET all semesters
router.get("/", async (req, res) => {
  try {
    const semesters = await Semester.find();
    res.json(semesters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single semester by ID
router.get("/:id", async (req, res) => {
  try {
    const semester = await Semester.findById(req.params.id);
    res.json(semester);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create a new semester
router.post("/", async (req, res) => {
  try {
    const semester = new Semester(req.body);
    await semester.save();
    res.json(semester);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update a semester
router.put("/:id", async (req, res) => {
  try {
    const semester = await Semester.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(semester);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a semester
router.delete("/:id", async (req, res) => {
  try {
    await Semester.findByIdAndDelete(req.params.id);
    res.json({ message: "Semester deleted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;