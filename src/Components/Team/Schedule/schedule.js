import React from 'react'
import { useSelector } from 'react-redux'
import { getTeam, getLeagueSchedule } from '../../../Redux/selectors'
import Week from './week'
import classes from '../../../CSS/schedule.module.css'

const Schedule = () => {
  const leagueSchedule = useSelector(getLeagueSchedule)
  const userTeam = useSelector(getTeam)

  const teamSchedule = leagueSchedule.map(week => week.racesThisWeek.filter(race => race.team1.teamId === userTeam.teamId || race.team2.teamId === userTeam.teamId)[0])

  return (
		<div className={classes.container}>
			{teamSchedule.map(week => <Week week={week.week} key={week.week} opponent={week.team1.teamId === userTeam.teamId ? week.team2.name : week.team1.name}/>)}
		</div>
  )
}

export default Schedule
