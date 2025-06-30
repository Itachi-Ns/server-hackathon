import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String
});

const Project = mongoose.model('project', projectSchema);

export default Project