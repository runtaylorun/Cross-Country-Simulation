import React, { Component } from 'react';
import GetLeagues from '../../Scripts/IndexedDb/Retrieval';
import { DeleteLeagueDatabase } from '../../Scripts/IndexedDb/leagueDatabaseOperations';
import LeagueBlock from './LeagueBlock';
import styles from '../../CSS/Home/Home.module.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			leagues: null,
		};
	}

	async componentDidMount() {
		const response = await GetLeagues();

		this.setState({
			isLoaded: true,
			leagues: response,
		});
	}

	handleLeagueDelete = async (leagueName) => {
		const response = await DeleteLeagueDatabase(leagueName);

		console.log(response);

		const leagues = await GetLeagues();

		this.setState({
			leagues: leagues,
		});
	};

	render() {
		const { isLoaded, leagues } = this.state;

		return isLoaded ? (
			<div>
				<h1>Cross Country Sim</h1>
				<div className={styles.container}>
					{leagues.map((league) => (
						<LeagueBlock
							deleteLeague={this.handleLeagueDelete}
							leagueName={league.name}
						></LeagueBlock>
					))}
				</div>
				<a href="/create">New League</a>
			</div>
		) : (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}
}

export default Home;
