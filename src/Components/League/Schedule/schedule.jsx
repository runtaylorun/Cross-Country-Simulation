import React from 'react'
import { useSelector } from 'react-redux'
import { getLeagueSchedule } from '../../../Redux/selectors'
import classes from '../../../CSS/schedule.module.css'

const Schedule = () => {
  const leagueSchedule = useSelector(getLeagueSchedule)
  console.log(leagueSchedule)

  return (
        <div className={classes.container}>
            {leagueSchedule.map(week => (
                <div key={week.weekNumber}>
                    <h3>{`Week ${week.weekNumber}`}</h3>
                    <ul>
                        {week.racesThisWeek.map(race => (
                            <li key={race.team1.name}>{`${race.team1.name} vs ${race.team2.name}`}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
  )
}

export default Schedule
