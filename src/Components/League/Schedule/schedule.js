import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getLeagueName } from '../../../Redux/selectors'
import { getSchedule } from '../../../Scripts/IndexedDb/scheduleServices'
import classes from '../../../CSS/schedule.module.css'

const Schedule = (props) => {
	const [schedule, setSchedule] = useState();
	const [userTeamId, setUserTeamId] = useState(0);
	const leagueName = useSelector(getLeagueName)


	useEffect(() => {
		const loadScheduleData = async () => {
			const leagueSchedule = await getSchedule(leagueName);
			const userTeamId = await getUserTeamId(leagueName);

			setSchedule(formatRaces(leagueSchedule))
			setUserTeamId(userTeamId)
		}

		loadScheduleData();
	}, [leagueName]);

	const formatRaces = (schedule) => {
		const allRaces = []

		schedule.forEach(week => allRaces.push(...week.racesThisWeek))

		const filteredRaces = allRaces.filter(race => race.team1.teamId === userTeamId || race.team2.teamId === userTeamId)

		return filteredRaces
	}

	return (
		<div className={classes.container}>
			<table>
				<thead>
					<tr>
						<th>Week</th>
						<th>Opponents</th>
					</tr>
				</thead>
				<tbody>
					{schedule && schedule.map((race) =>
					(
						<tr key={race.week}>
							<td>{race.week}</td>
							<td>
								{race.team1.name} vs {race.team2.name}
							</td>
						</tr>
					)
					)}
				</tbody>
			</table>
		</div>
	)
}

export default Schedule
