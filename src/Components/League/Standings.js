import React, { useEffect, useState } from 'react';
import { GetTeams } from '../../Scripts/IndexedDb/TeamServices';

const Standings = (props) => {
	const [teams, setTeams] = useState([]);
	const { leagueName } = props.match.params;

	useEffect(() => {
		const getTeams = async () => {
			const response = await GetTeams(leagueName);

			setTeams([...response])
		};

		getTeams();
	}, [leagueName]);

	return (
		<div>
			<ul>
				{teams.map(team => <li>{team.name}</li>)}
			</ul>
		</div>
	);
};

export default Standings;
