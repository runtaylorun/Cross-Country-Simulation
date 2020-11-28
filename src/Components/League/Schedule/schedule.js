import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { getLeagueName} from '../../../Redux/selectors'
import { getSchedule } from '../../../Scripts/IndexedDb/scheduleServices'
import classes from '../../../CSS/schedule.module.css'

const Schedule = () => {
	const [schedule, setSchedule] = useState()
	const leagueName = useSelector(getLeagueName)

	useEffect(() => {

		const loadSchedule = async () => {
			const leagueSchedule = await getSchedule(leagueName)

			setSchedule(formatRaces(leagueSchedule))
		}

		loadSchedule()
	}, [])

	const formatRaces = (schedule) => {
		const allRaces = []

		schedule.forEach((week) => {
			allRaces.push(...week.racesThisWeek)
		})

		const filteredRaces = allRaces.filter(
			(race) => race.team1.teamId === 2 || race.team2.teamId === 2
		)

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
					{schedule &&
						schedule.map((race) => {
							return (
								<tr key={race.week}>
									<td>{race.week}</td>
									<td>
										{race.team1.name} vs {race.team2.name}
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}

export default Schedule
