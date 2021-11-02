import React from 'react';
import classes from '../../CSS/Navbar.module.css';
import { withRouter, Link } from 'react-router-dom';
import { simulateWeek } from '../../Scripts/seasonSimulation/simulateWeek';

const Navbar = ({ location }) => {
	if (location.pathname === '/' || location.pathname === '/create') {
		return null;
	}

	/*TODO: This could be so much better*/
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

	const simulate = async () => {
		await simulateWeek(leagueName);
	};

	return (
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
