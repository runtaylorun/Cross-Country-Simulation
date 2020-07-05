import React, { Component } from 'react';
import UserContext from '../Context/UserContext';
import { GetUserTeam } from '../../Scripts/IndexedDb/UserServices';
import classes from '../../CSS/leagueDashboard.module.css';
import Standings from './Standings';

class LeagueDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leagueName: this.props.match.params.leagueName,
			userTeam: {},
		};
	}
	static contextType = UserContext;

	async componentDidMount() {
		const { leagueName } = this.props.match.params;
		const userTeam = await GetUserTeam(leagueName);

		this.setState({
			leagueName: leagueName,
			userTeam: userTeam,
		});
	}

	render() {
		return (
			<div className={classes.container}>
				<div className={classes.header}>
					<h1>{this.state.userTeam.name}</h1>
				</div>
				<div className={classes.footer}></div>
			</div>
		);
	}
}

export default LeagueDashboard;
