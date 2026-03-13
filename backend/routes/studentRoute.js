// routes/studentCourses.js
const express = require("express");
const router = express.Router();
const CourseStudent = require("../models/CourseStudent");
const Course = require("../models/Course");
const User = require("../models/User");

// ------------------------------
// Enroll a student in a course
// POST /student_courses/enroll
// ------------------------------
router.post("/enroll", async (req, res) => {
  try {
    const { courseId, studentId } = req.body;

    // Check if student and course exist
    const student = await User.findById(studentId);
    const course = await Course.findById(courseId);
    if (!student || student.role !== "student") return res.status(404).json({ message: "Student not found" });
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Prevent duplicate enrollment
    const exists = await CourseStudent.findOne({ course: courseId, student: studentId });
    if (exists) return res.status(400).json({ message: "Student already enrolled in this course" });

    // Create enrollment
    const enrollment = await CourseStudent.create({ course: courseId, student: studentId });
    res.status(201).json({ message: "Student enrolled", data: enrollment });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ------------------------------
// Get all courses of a student
// GET /student_courses/student/:studentId/courses
// ------------------------------
router.get("/student/:studentId/courses", async (req, res) => {
  try {
    const courses = await CourseStudent.find({ student: req.params.studentId }).populate("course");
    res.json(courses.map(c => c.course));
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ------------------------------
// Get all students of a course
// GET /student_courses/course/:courseId/students
// ------------------------------
router.get("/course/:courseId/students", async (req, res) => {
  try {
    const students = await CourseStudent.find({ course: req.params.courseId }).populate("student");
    res.json(students.map(s => s.student));
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ------------------------------
// Unenroll a student from a course
// DELETE /student_courses/unenroll
// Body: { courseId, studentId }
// ------------------------------
router.delete("/unenroll", async (req, res) => {
  try {
    const { courseId, studentId } = req.body;
    const deleted = await CourseStudent.findOneAndDelete({ course: courseId, student: studentId });
    if (!deleted) return res.status(404).json({ message: "Enrollment not found" });
    res.json({ message: "Student unenrolled from course" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;