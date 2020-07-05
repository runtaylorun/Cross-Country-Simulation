import React from 'react';
import classes from '../../CSS/Navbar.module.css';
import { simulateRace } from '../../Scripts/Race';
import { withRouter, Link } from 'react-router-dom';

const Navbar = ({ location }) => {
	if (location.pathname === '/' || location.pathname === '/create') {
		return null;
	}

	/*TODO: FIX THIS, THIS IS TERRIBLE AND HACKY*/
	const getLeagueNameFromURL = (path) => {
		let firstSlashIndex = location.pathname.indexOf('/', 1) + 1;
		let secondSlashIndex = location.pathname.indexOf('/', firstSlashIndex);
		if (secondSlashIndex === -1) {
			return path.substring(firstSlashIndex);
		} else {
			return path.substring(firstSlashIndex, secondSlashIndex);
		}
	};

	const leagueName = getLeagueNameFromURL(location.pathname);
	console.log(leagueName);
	return (
		<div className={classes.nav}>
			<div className={classes.navLeft}>
				<Link to='/'>XC Simulation</Link>
				<p onClick={() => simulateRace(leagueName)}>Simulate Week</p>
			</div>
			<div className={classes.navRight}>
				<div className={classes.dropdown}>
					<button>League</button>
					<div className={classes.dropdownContent}>
						<Link to={`/league/${leagueName}`}>Home</Link>
						<Link to={`/league/${leagueName}/standings`}>Standings</Link>
						<p>Schedule</p>
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
	);
};

export default withRouter(Navbar);
