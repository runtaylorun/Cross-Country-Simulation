import React from 'react'
import RosterTable from './rosterTable'
import { useSelector } from 'react-redux'
import { getRoster } from '../../../Redux/selectors'
import classes from '../../../CSS/roster.module.css'

const Roster = () => {
	const roster = useSelector(getRoster)

	return (
		<div className={classes.container}>
			<RosterTable roster={roster} />
		</div>
	)
}

export default Roster
