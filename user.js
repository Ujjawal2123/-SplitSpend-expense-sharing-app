import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  balance: Number,
});

export default mongoose.model("User", userSchema);
