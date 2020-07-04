import { CreateLeagueDatabase } from '../../Scripts/IndexedDb/leagueDatabaseOperations';
import React, { useState, useEffect } from 'react';
import Teams from '../../Data/Teams.json';
import classes from '../../CSS/createForm.module.css';
import { Redirect, Link } from 'react-router-dom';

const CreateLeagueForm = () => {
	const [leagueName, setLeagueName] = useState('');
	const [isLeagueCreated, setIsLeagueCreated] = useState(false);
	const [teams, setTeams] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState();

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
		let response;
		if (selectedTeam) {
			response = await CreateLeagueDatabase(leagueName, selectedTeam);
		} else {
			response = await CreateLeagueDatabase(leagueName, teams[0]);
		}

		response === 'Success' ? setIsLeagueCreated(true) : console.log('error creating league');
	};

	if (isLeagueCreated) return <Redirect to={`/league/${leagueName}`} />;

	return (
		<div className={classes.center}>
			<h1>Create New League</h1>
			<form className={classes.container} onSubmit={(e) => handleSubmit(e)}>
				<div>
					<label className={classes.label}>League Name</label>
					<input className={classes.textBox} type='text' onChange={(e) => handleChange(e)}></input>
				</div>
				<div>
					<label className={classes.label}>Select a Team</label>
					<select className={classes.select} onChange={(e) => handleTeamChange(e)}>
						{teams.map((team) => (
							<option value={team.teamId}>{team.name}</option>
						))}
					</select>
				</div>
				<div>
					<button className={classes.button} type='submit'>
						Create
					</button>
					<button type='reset' className={classes.button}>
						Clear
					</button>
				</div>
			</form>
			<Link to='/'>Go Back</Link>
		</div>
	);
};

export default CreateLeagueForm;
