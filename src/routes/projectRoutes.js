import {Router} from "express"
import mongoose from "mongoose"
import Project from "../models/projects.js"

const router = Router()


router.get("/", (req, res) =>{
  res.send("This is a list of project")
})

router.post("/", (req, res) =>{
  
  // res.send(JSON.parse(JSON.stringify(req.body)))

  // res.send(req.body)
  // console.log(req.body)

  const reqData = req.body;
  res.json({
		...reqData, message: "Project has been created"
	})
  
  const project1 = new Project({ name: 'ProjectRouteDemo2' });
  project1.save()

})

router.get("/:id", (req, res) =>{
  res.send("This is a projects detail page")
})

export default router
