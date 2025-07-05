import {Router} from "express"
import mongoose from "mongoose"
import Project from "../models/projects.js"

import {
	createProject,
	getAllProjects,
} from "../controller/projects.js";

const router = Router();


// const projectRoutes = Router()


// projectRoutes.get("/", (req, res) =>{
//   res.send("This is a list of project")
// })

// projectRoutes.post("/", (req, res) =>{
  
//   // res.send(req.body)
//   // console.log(req.body)

//   const reqData = req.body;
//   res.json({
// 		...reqData, message: "Project has been created"
// 	})
  
//   const project1 = new Project({ name: 'ProjectRouteDemo2' });
//   project1.save()

// })

// projectRoutes.get("/:id", (req, res) =>{
//   res.send("This is a projects detail page")
// })

router.post("/", createProject);
router.get("/", getAllProjects);

// export default projectRoutes

export default router;