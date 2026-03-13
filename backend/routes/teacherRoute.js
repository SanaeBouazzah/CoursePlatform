// routes/teacherRoute.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const Course = require("../models/Course");

// Example: get all teacher-course assignments
// (assumes you have a Course model with a 'teachers' array or a separate collection)
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().populate("teachers", "name email");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a teacher to a course
router.post("/assign", async (req, res) => {
  try {
    const { courseId, teacherId } = req.body;

    // Check if IDs are valid
    if (!mongoose.Types.ObjectId.isValid(courseId) || !mongoose.Types.ObjectId.isValid(teacherId)) {
      return res.status(400).json({ error: "Invalid IDs" });
    }

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: "Course not found" });

    // Initialize teachers array if needed
    course.teachers = course.teachers || [];

    // Add teacher if not already assigned
    if (!course.teachers.includes(teacherId)) {
      course.teachers.push(teacherId);
      await course.save();
    }

    res.json({ message: "Teacher assigned to course", course });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Remove a teacher from a course
router.post("/remove", async (req, res) => {
  try {
    const { courseId, teacherId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: "Course not found" });

    course.teachers = course.teachers.filter(id => id.toString() !== teacherId);
    await course.save();

    res.json({ message: "Teacher removed from course", course });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;