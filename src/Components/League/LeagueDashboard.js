import React from 'react'
import {useSelector} from 'react-redux'
import {getTeam} from '../../Redux/selectors'
import classes from '../../CSS/leagueDashboard.module.css'

const LeagueDashboard = () => {

	const team = useSelector(getTeam)

	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<h1>{team.name}</h1>
			</div>
			<div className={classes.footer}></div>
		</div>
	)
}

export default LeagueDashboard
