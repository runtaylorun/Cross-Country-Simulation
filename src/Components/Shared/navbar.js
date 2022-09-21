import React from 'react'
import classes from '../../CSS/navbar.module.css'
import { getLeagueName } from '../../redux/selectors'
/* import { simulateRace } from '../../Scripts/race' */
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
/* import { simulateWeek } from '../../Scripts/seasonSimulation/simulateWeek'; */

const Navbar = () => {
  const leagueName = useSelector(getLeagueName)
  const { pathname } = useLocation()

  const simulate = async () => {
    /* await simulateWeek(leagueName); */
  }

  return (
    (pathname === '/' || pathname === '/create' || leagueName === '')
      ? null
      : <div className={classes.nav}>
				<div className={classes.navLeft}>
					<Link style={{ color: 'white' }} to='/'>XC Simulation</Link>
					<p style={{ color: 'white' }} onClick={() => simulate()}>Simulate Week</p>
				</div>
				<div className={classes.navRight}>
					<div className={classes.navRight}>
						<div className={classes.dropdown}>
							<button style={{ color: 'white' }}>League</button>
							<div className={classes.dropdownContent}>
								<Link style={{ color: 'white' }} to={`/league/${leagueName}`}>Home</Link>
								<Link style={{ color: 'white' }} to={`/league/${leagueName}/standings`}>Standings</Link>
								<Link style={{ color: 'white' }} to={`/league/${leagueName}/schedule`}>Schedule</Link>
							</div>
						</div>
						<div className={classes.dropdown}>
							<button style={{ color: 'white' }}>Team</button>
							<div className={classes.dropdownContent}>
								<Link style={{ color: 'white' }} to={`/league/${leagueName}/team/roster`}>Roster</Link>
								<Link style={{ color: 'white' }} to={`/league/${leagueName}/team/schedule`}>Schedule</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}

export default Navbar
