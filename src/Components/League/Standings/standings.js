/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import { getTeams } from '../../../redux/selectors'
import Podium from './podium'
import classes from '../../../CSS/schedule.module.css'
w

const Standings = () => {
  const teams = useSelector(getTeams)
  const orderedByWins = [...teams].sort((team1, team2) => team2.wins - team1.wins)

  return (
		<div className={classes.container}>
			<div className={classes.pageHeader}>
				<h2>Standings</h2>
				<p>See where you rank amongst the league</p>
			</div>
			<Podium teams={teams}/>
		</div>
  )
}

export default Standings
