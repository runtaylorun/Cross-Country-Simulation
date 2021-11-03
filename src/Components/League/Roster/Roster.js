import React from 'react'
import RosterTable from '../RosterTable'
import { useSelector } from 'react-redux'
import { getRoster } from '../../../Redux/selectors'
import classes from '../../../CSS/roster.module.css'

const Roster = () => {
	const roster = useSelector(getRoster)

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
	)
}

export default Roster
