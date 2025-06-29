import {Router} from "express"

const router = Router()

router.get("/", (req, res) =>{
  res.send("This is a list of project")
})

router.post("/", (req, res) =>{
  
  // res.send(JSON.parse(JSON.stringify(req.body)))

  // res.send(req.body)
  // console.log(req.body)

  const reqData = req.body;
  res.json(reqData)

})

router.get("/:id", (req, res) =>{
  res.send("This is a projects detail page")
})

export default router
