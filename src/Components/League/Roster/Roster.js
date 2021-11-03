import React, { useState, useEffect } from 'react';
import RosterTable from '../RosterTable';
import { GetUserTeam } from '../../../Scripts/IndexedDb/UserServices';
import { getRosterById } from '../../../Scripts/IndexedDb/PlayerServices';
import classes from '../../../CSS/roster.module.css';

const Roster = (props) => {
	const [roster, setRoster] = useState([]);
	const [userTeam, setUserTeam] = useState({});
	const { leagueName } = props.match.params;

	useEffect(() => {
		const getTeamData = async () => {
			const userTeamData = await GetUserTeam(leagueName);
			const rosterData = await getRosterById(leagueName, userTeamData.teamId);

			setUserTeam(userTeamData);
			setRoster(rosterData);
		};

		getTeamData();
	}, [leagueName]);

	return (
		<div className={classes.container}>
			<RosterTable roster={roster} />
		</div>
	);
};

export default Roster;
