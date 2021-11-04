import React from 'react'
import { useSelector } from 'react-redux'
import { getTeam, getLeagueSchedule } from '../../../Redux/selectors'
import classes from '../../../CSS/schedule.module.css'

const Schedule = () => {
	const leagueSchedule = useSelector(getLeagueSchedule)
	const team = useSelector(getTeam)


	const getUserTeamsRaces = (schedule) => {
		const allRaces = []

		schedule.forEach(week => allRaces.push(...week.racesThisWeek))

		const filteredRaces = allRaces.filter(race => race.team1.teamId === team.teamId || race.team2.teamId === team.teamId)

		return filteredRaces
	}
	const teamSchedule = getUserTeamsRaces(leagueSchedule)


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
					{teamSchedule && teamSchedule.map(race =>
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
