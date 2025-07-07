import {Router} from "express"
import Team from "../models/teams.js"
import {
	createTeam,
	getAllTeams,
	getTeamById,
} from "../controller/teams.js";


const router = Router();

// const teamRoutes = Router()

// teamRoutes.get("/", (req, res)=>{
//     res.send("This is the list of teams")
// })

// teamRoutes.post("/", (req, res) => {
//     const reqData = req.body
//     res.json({
// 		...reqData, message: "Team has been created"
// 	})

//     const team1 = new Team({name: "TeamDemo"})
//     team1.save()
// })

// teamRoutes.get("/:id", (req, res) => {
//     res.send("This is a teams detail page")

//     const team2 = new Team({name: "Ram"})
//     team2.save()
// })

router.post("/", createTeam);
router.get("/", getAllTeams);
router.get('/:id', getTeamById);	


// export default teamRoutes

export default router;