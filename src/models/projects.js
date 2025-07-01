import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
	genre: String,
	imgUrl: String,
	team: String
});

const Project = mongoose.model('project', projectSchema);

export default Project