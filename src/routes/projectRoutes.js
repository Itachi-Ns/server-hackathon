import {Router} from "express"
import mongoose from "mongoose"
import Project from "../models/projects.js"

const projectRoutes = Router()


projectRoutes.get("/", (req, res) =>{
  res.send("This is a list of project")
})

projectRoutes.post("/", (req, res) =>{
  
  // res.send(req.body)
  // console.log(req.body)

  const reqData = req.body;
  res.json({
		...reqData, message: "Project has been created"
	})
  
  const project1 = new Project({ name: 'ProjectRouteDemo2' });
  project1.save()

})

projectRoutes.get("/:id", (req, res) =>{
  res.send("This is a projects detail page")
})

export default projectRoutes
