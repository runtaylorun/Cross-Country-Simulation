import React from 'react'
import { useSelector } from 'react-redux'
import { getLeagueSchedule } from '../../../Redux/selectors'
import Week from '../../Team/Schedule/week'
import classes from '../../../CSS/schedule.module.css'

const LeagueSchedule = () => {
  const leagueSchedule = useSelector(getLeagueSchedule)

  return (
        <div className={classes.container}>
            <div className={classes.pageHeader}>
                <h2>League Schedule</h2>
                <p>See what everyone in the league is up to</p>
            </div>
			{leagueSchedule.map(week => (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', width: '75%', border: '1px solid orange', margin: 10, borderRadius: 10 }} key={week.weekNumber}>
                    <h3>{`Week ${week.weekNumber}`}</h3>
                    {week.racesThisWeek.map(race => <Week key={race.team1.name} team1={race.team1.name} team2={race.team2.name} />)}
                </div>
			))}

        </div>
  )
}

export default LeagueSchedule
