import React from 'react'
import classes from '../../../css/schedule.module.css'
import PropTypes from 'prop-types'

const Week = ({ week, team1, team2, bordered }) => {
  return (
        <div style={{ border: bordered ? '1px solid orange' : 'none' }} className={classes.weekContainer}>
            {week && <h2>{`Week ${week} Matchup`}</h2>}
            <p>{`${team1 ?? ''} @ ${team2}`}</p>
        </div>
  )
}

Week.propTypes = {
  week: PropTypes.number,
  team1: PropTypes.string,
  team2: PropTypes.string,
  bordered: PropTypes.bool
}
export default Week
