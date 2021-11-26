import React from 'react'
import classes from '../../../CSS/schedule.module.css'
import PropTypes from 'prop-types'

const Week = ({ week, opponent }) => {
  return (
        <div className={classes.weekContainer}>
            <h2>{`Week ${week} Matchup`}</h2>
            <p>{`@ ${opponent}`}</p>
        </div>
  )
}

Week.propTypes = {
  week: PropTypes.number,
  opponent: PropTypes.string
}
export default Week
