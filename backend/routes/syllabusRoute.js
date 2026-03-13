const express = require("express");
const router = express.Router();
const Syllabus = require("../models/Syllabus");

router.get("/", async (req, res) => {
  try {
    const syllabuses = await Syllabus.find();
    res.json(syllabuses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
