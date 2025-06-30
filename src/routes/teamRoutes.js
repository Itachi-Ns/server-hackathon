import {Router} from "express"
import Team from "../models/teams.js"

const router2 = Router()

router2.get("/", (req, res)=>{
    res.send("This is the list of teams")
})

router2.post("/", (req, res) => {
    const reqData = req.body
    res.json({
		...reqData, message: "Team has been created"
	})

    const team1 = new Team({name: "TeamDemo"})
    team1.save()
})

router2.get("/:id", (req, res) => {
    res.send("This is a teams detail page")

    const team2 = new Team({name: "Ram"})
    team2.save()
})

export default router2