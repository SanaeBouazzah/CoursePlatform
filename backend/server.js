const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const bcrypt = require("bcrypt");
const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(express.json());


//Models
const Major = require("./models/Major");
const Semester = require("./models/Semester");
const Course = require("./models/Course");
const User = require("./models/User");
const Syllabus = require("./models/Syllabus");




//Routes
const courseRoutes = require("./routes/courseRoute");
const majorRoutes = require("./routes/majorRoute");
const semesterRoutes = require("./routes/semesterRoute");
const studentCoursesRoutes = require("./routes/studentRoute");
const teacherCoursesRoutes = require("./routes/teacherRoute");
const authRoutes = require("./routes/authRoute");
const syllabusRoutes = require("./routes/syllabusRoute");



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/acceuil/resources_pedagogique/cours", courseRoutes);
app.use("/acceuil/resources_pedagogique/majors", majorRoutes);
app.use("/acceuil/resources_pedagogique/semesters", semesterRoutes);
app.use("/student_courses", studentCoursesRoutes);
app.use("/teacher_courses", teacherCoursesRoutes);
app.use("/auth", authRoutes);
app.use("/acceuil/resources_pedagogique/syllabus", syllabusRoutes);


app.get("/", (req, res) => {
  res.send("API running...");
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Intialiser Data Major, Semester, Courses
app.get("/test-insert-major", async (req, res) => {
  try {
    const major = new Major({
      name: "ingénierie des application web et mobile",
      code: "IAWM"
    });
    await major.save();
    res.send({ message: "Major inserted!", major });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
app.get("/test-insert-semester", async (req, res) => {
  try {
    const semester = new Semester({
      name: "Semester 1",
      code: "S1"
    });
    await semester.save();
    res.send({ message: "Semester inserted!", semester });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
app.get("/test-insert-course", async (req, res) => {
  try {
    const course = new Course({
      name: "JavaScript",
      code: "JS01",
      description: "Langage de programmation",
      order: "1",
      document: "PDF",
      fileUrl: "/uploads/javascript_introduction_f.pdf",
      size: 1, // in MB
      major: "69b157ec7ec93cee2300b747",
      semester: "69b158187ec93cee2300b749"
    });
    await course.save();
    res.send("Course inserted!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.get("/test-insert-user", async (req, res) => {
  try {
    const user = new User({
      name: "Ali Taki",
      email: "ali@test.com",
      password: "123456",
      role: "teacher"
    });
    await user.save();

    res.send({ message: "User inserted!", user });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
app.get("/test-insert-syllabus", async (req, res) => {
  try {
    const syllabus = new Syllabus({
      title: "Introduction à JavaScript",
      description: "Présentation des bases de JavaScript",
      week: 1,
      course: "69b2d10e1f7c562366c5ba30",
      teacher: "69b3f902c985cb10c4dfc7ea", 
      major: "69b157ec7ec93cee2300b747",   
      semester: "69b158187ec93cee2300b749",                       
    });

    await syllabus.save();
    res.send({ message: "Syllabus inserted!", syllabus });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

