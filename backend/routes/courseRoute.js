const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const CourseTeacher = require("../models/CourseTeacher");
const CourseStudent = require("../models/CourseStudent");

// Get all courses
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Get a single course
router.get("/:courseId", async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  res.json(course);
});

// Add teacher to course
router.post("/:courseId/teachers/:teacherId", async (req, res) => {
  const link = await CourseTeacher.create({ 
    course: req.params.courseId, 
    teacher: req.params.teacherId 
  });
  res.json(link);
});

// Get all teachers of a course
router.get("/:courseId/teachers", async (req, res) => {
  const teachers = await CourseTeacher.find({ course: req.params.courseId }).populate("teacher");
  res.json(teachers);
});

// Enroll student in course
router.post("/:courseId/students/:studentId", async (req, res) => {
  const link = await CourseStudent.create({ 
    course: req.params.courseId, 
    student: req.params.studentId 
  });
  res.json(link);
});

// Get all students of a course
router.get("/:courseId/students", async (req, res) => {
  const students = await CourseStudent.find({ course: req.params.courseId }).populate("student");
  res.json(students);
});

module.exports = router;