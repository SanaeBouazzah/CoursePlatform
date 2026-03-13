const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["student", "teacher", "user"], required: true },
  password: { type: String, required: true }, 
  major: { type: mongoose.Schema.Types.ObjectId, ref: "Major" } 
});


UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});
module.exports = mongoose.model("User", UserSchema);