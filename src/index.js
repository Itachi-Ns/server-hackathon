// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World! adnjsandjn\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// }); 

import express from "express"
import projectRoutes from "./routes/projectRoutes.js"
import teamRoutes from "./routes/teamRoutes.js"
import mongoose from "mongoose"
import connectDB from "./config/db.js";
import env from "./config/env.js"

const app = express()
app.use(express.json())   //Does the parse and stringify

// const PORT = 3000
const PORT = env.PORT || 3000;


// mongoose.connect('mongodb://127.0.0.1:27017/hackathon').then(() => {
//   console.log("Connected to database!")
// })

connectDB();

// const projectSchema = new mongoose.Schema({
//   name: String
// });

// const Project = mongoose.model('project', projectSchema);

// app.get("/", (req, res) =>{
  // const project1 = new Project({ name: 'Test Project' });
  // project1.save()
  
//   res.send("Hello World!")
// })

//get, post, delete, patch, put

app.use("/projects", projectRoutes)
app.use("/teams", teamRoutes)

app.listen(PORT, () => {
  console.log("Server running on port ${PORT}")
})