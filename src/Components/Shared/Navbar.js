import React from 'react';
import classes from '../../CSS/Navbar.module.css';
import { getLeagueName } from '../../Redux/selectors'
import { simulateRace } from '../../Scripts/Race'
import { useSelector } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';
import { simulateWeek } from '../../Scripts/seasonSimulation/simulateWeek';

const Navbar = ({ location }) => {
	const leagueName = useSelector(getLeagueName)

	const simulate = async () => {
		await simulateWeek(leagueName);
	};

	return (
		location.pathName === '/' || location.pathName === '/create' ? null :
			<div className={classes.nav}>
				<div className={classes.navLeft}>
					<Link to='/'>XC Simulation</Link>
					<p onClick={() => simulate()}>Simulate Week</p>
				</div>
				<div className={classes.navRight}>
					<div className={classes.dropdown}>
						<button>League</button>
						<div className={classes.dropdownContent}>
							<Link to={`/league/${leagueName}`}>Home</Link>
							<Link to={`/league/${leagueName}/standings`}>Standings</Link>
							<Link to='/'>Schedule</Link>
						</div>
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
			</div>
	)
}

export default withRouter(Navbar)
