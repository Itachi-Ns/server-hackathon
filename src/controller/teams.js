import Team from "../models/teams.js";

export const createTeam = async (req, res) => {
	try {
		const teamData = req.body;
		const team = new Team(teamData);
		await team.save();
		res.status(201).json(team);
	} catch (err) {
		console.log(err)
		res.status(500).json({ error: err.message });
	}
};

export const getAllTeams = async (req, res) => {
	try {
		const teams = await Team.find();
		res.json(teams);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const getTeamById = async (req, res) => {
	try {
		const { id } = req.params; // 👈 get ID from route params
		const team = await Team.findById(id);
		if (!team) {
			return res.status(404).json({ message: 'Team not found' });
		}
		res.json(team);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};