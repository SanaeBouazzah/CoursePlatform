const mongoose = require("mongoose");

const SyllabusSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  week: { type: Number },
  order: { type: Number, default: 1 },
  document: { type: String, enum: ["PDF", "Excel"], default: "PDF" },
  fileUrl: { type: String },
  size: { type: Number },
  semester: { type: mongoose.Schema.Types.ObjectId, ref: "Semester", required: true },
  major: { type: mongoose.Schema.Types.ObjectId, ref: "Major", required: true },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true}
  }, { timestamps: true });

module.exports = mongoose.model("Syllabus", SyllabusSchema);
