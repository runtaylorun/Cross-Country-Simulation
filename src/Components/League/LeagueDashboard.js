import React, { useState, useEffect } from 'react';
import { GetUserTeam } from '../../Scripts/IndexedDb/UserServices';
import { getSeasonInfo } from '../../Scripts/IndexedDb/SeasonServices';
import classes from '../../CSS/leagueDashboard.module.css';

const LeagueDashboard = (props) => {
	const [userTeam, setUserTeam] = useState({})
	const [seasonInfo, setSeasonInfo] = useState({})
	const { leagueName } = props.match.params;

	useEffect(() => {
		const getSeasonData = async () => {
			const userTeam = await GetUserTeam(leagueName);
			const seasonInfo = await getSeasonInfo(leagueName);

			setUserTeam(userTeam)
			setSeasonInfo(seasonInfo)
		}

		getSeasonData()
	}, [])

	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<div className={classes.headerGroupText}>
					<h1>{userTeam.name}</h1>
					<p style={{ fontSize: '15px', marginBottom: '0', marginTop: '0' }}>
						{`(Week ${seasonInfo.currentWeek})`}
					</p>
				</div>
			</div>
			<div className={classes.footer}></div>
		</div>
	)
}

export default LeagueDashboard
