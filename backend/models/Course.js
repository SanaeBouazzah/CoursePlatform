const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },       
  code: { type: String, required: true, unique: true },  
  description: { type: String },             
  order: { type: Number, default: 1 },
  document: { type: String, enum: ["PDF", "Excel"], default: "PDF" },
  fileUrl: { type: String },
  size: { type: Number }, 
  semester: { type: mongoose.Schema.Types.ObjectId, ref: "Semester", required: true },
  major: { type: mongoose.Schema.Types.ObjectId, ref: "Major", required: true }, // filiere
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);