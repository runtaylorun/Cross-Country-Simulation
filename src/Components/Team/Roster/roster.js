import React from 'react'
import RosterTable from './rosterTable'
import { useSelector } from 'react-redux'
import { getRoster } from '../../../redux/selectors'
import classes from '../../../css/roster.module.css'

const Roster = () => {
  const roster = useSelector(getRoster)

  return (
		<div className={classes.container}>
      <div className={classes.pageHeader}>
        <h2>Roster</h2>
        <p>Check out your team and change your varisty lineup</p>
      </div>
			<RosterTable roster={roster} />
		</div>
  )
}

export default Roster
