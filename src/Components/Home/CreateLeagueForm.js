import { CreateLeagueDatabase } from '../../Scripts/IndexedDb/leagueDatabaseOperations';
import React, { useState, useEffect } from 'react';
import Teams from '../../Data/Teams.json';
import { Redirect } from 'react-router-dom';

const CreateLeagueForm = () => {
	const [leagueName, setLeagueName] = useState('');
	const [isLeagueCreated, setIsLeagueCreated] = useState(false);
	const [teams, setTeams] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState(0);

	useEffect(() => {
		setTeams([...Teams.Teams]);
	}, []);

	const handleChange = (e) => {
		setLeagueName(e.target.value);
	};

	const handleTeamChange = (e) => {
		setSelectedTeam(teams[e.target.value - 1]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await CreateLeagueDatabase(leagueName, selectedTeam);

		response === 'Success'
			? setIsLeagueCreated(true)
			: console.log('error creating league');
	};

	if (isLeagueCreated) return <Redirect to={`/league/${leagueName}`} />;

	return (
		<div>
			<h1>Create New League</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>League Name</label>
				<input type="text" onChange={(e) => handleChange(e)}></input>
				<select onChange={(e) => handleTeamChange(e)}>
					{teams.map((team) => (
						<option value={team.teamId}>{team.name}</option>
					))}
				</select>
				<button type="submit">Create</button>
			</form>
		</div>
	);
};

export default CreateLeagueForm;
