import React from 'react'
import {useSelector} from 'react-redux'
import {getLeagueName} from '../../Redux/selectors'
import classes from '../../CSS/Navbar.module.css'
import { simulateRace } from '../../Scripts/Race'
import { withRouter, Link } from 'react-router-dom'

const Navbar = ({ location }) => {
	const leagueName = useSelector(getLeagueName)

	return (
		location.pathname === '/' || location.pathname === '/create' ? null :
			<div className={classes.nav}>
				<div className={classes.navLeft}>
					<Link to="/">XC Simulation</Link>
					<p onClick={() => simulateRace(leagueName)}>Simulate Week</p>
				</div>
				<div className={classes.navRight}>
					<div className={classes.dropdown}>
						<button>League</button>
						<div className={classes.dropdownContent}>
							<Link to={`/league/${leagueName}`}>Home</Link>
							<Link to={`/league/${leagueName}/standings`}>Standings</Link>
							<Link to="/">Schedule</Link>
						</div>
					</div>
					<div className={classes.dropdown}>
						<button>Team</button>
						<div className={classes.dropdownContent}>
							<Link to={`/league/${leagueName}/roster`}>Roster</Link>
							<Link to={`/league/${leagueName}/teamSchedule`}>Schedule</Link>
						</div>
					</div>
				</div>
			</div>
	)
}

export default withRouter(Navbar)
