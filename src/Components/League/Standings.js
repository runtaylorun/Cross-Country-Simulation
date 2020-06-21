import React, { useEffect, useState } from 'react';
import { GetTeams } from '../../Scripts/IndexedDb/TeamServices';

const Standings = ({ leagueName }) => {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		const getTeams = async () => {
			const response = await GetTeams(leagueName);

			setTeams([...response]);
		};
		getTeams();
	}, []);

	return (
		<div>
			<ul>
				{teams.map((team) => (
					<li>{team.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Standings;
