import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import getRosterById from '../../Scripts/IndexedDb/PlayerServices';
import { GetUserTeam } from '../../Scripts/IndexedDb/UserServices';
import classes from '../../CSS/leagueDashboard.module.css';
import Roster from './Roster';
import { simulateRace } from '../../Scripts/Race';
import Standings from './Standings';

class LeagueDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leagueName: this.props.match.params.leagueName,
			roster: [],
			userTeam: {},
		};
	}
	static contextType = UserContext;

	async componentDidMount() {
		const { leagueName } = this.props.match.params;
		const userTeam = await GetUserTeam(leagueName);
		const roster = await getRosterById(leagueName, userTeam.teamId);

		this.setState({
			leagueName: leagueName,
			roster: roster,
			userTeam: userTeam,
		});
	}

	render() {
		return (
			<div className={classes.container}>
				<div className={classes.header}>
					<h1>{this.state.userTeam.name}</h1>
				</div>
				<div className={classes.roster}>
					<Roster roster={this.state.roster} />
				</div>
				<div className={classes.standings}>
					<Standings leagueName={this.state.leagueName} />
				</div>
				<div className={classes.footer}>
					<Link to="/">Home</Link>
					<button onClick={() => simulateRace(this.state.leagueName)}>
						Simulate Race
					</button>
				</div>
			</div>
		);
	}
}

export default LeagueDashboard;
