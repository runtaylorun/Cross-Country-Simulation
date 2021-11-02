import React, { Component } from 'react';
import { GetUserTeam } from '../../Scripts/IndexedDb/UserServices';
import { getSeasonInfo } from '../../Scripts/IndexedDb/SeasonServices';
import classes from '../../CSS/leagueDashboard.module.css';

class LeagueDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leagueName: this.props.match.params.leagueName,
			userTeam: {},
			seasonInfo: {},
		};
	}

	async componentDidMount() {
		const { leagueName } = this.props.match.params;
		const userTeam = await GetUserTeam(leagueName);
		const seasonInfo = await getSeasonInfo(leagueName);

		this.setState({
			leagueName: leagueName,
			userTeam: userTeam,
			seasonInfo: seasonInfo,
		});
	}

	render() {
		return (
			<div className={classes.container}>
				<div className={classes.header}>
					<div className={classes.headerGroupText}>
						<h1>{this.state.userTeam.name}</h1>
						<p
							style={{ fontSize: '15px', marginBottom: '0', marginTop: '0' }}
						>{`(Week ${this.state.seasonInfo.currentWeek})`}</p>
					</div>
				</div>
				<div className={classes.footer}></div>
			</div>
		);
	}
}

export default LeagueDashboard;
