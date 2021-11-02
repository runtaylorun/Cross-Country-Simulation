import React, { useState, useEffect } from 'react';
import { getLeagues, getLeagueCount } from '../../Scripts/IndexedDb/Retrieval';
import { deleteLeagueDatabase } from '../../Scripts/IndexedDb/leagueDatabaseOperations';
import LeagueBlock from './LeagueBlock';
import classes from '../../CSS/Home/Home.module.css';

const Home = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [leagues, setLeagues] = useState([])

	const deleteLeague = async (leagueName) => {
		await deleteLeagueDatabase(leagueName);

		const leagues = await getLeagues();

		setLeagues(leagues)
	}

	useEffect(() => {
		const loadLeagues = async () => {
			const leagues = await getLeagues()

			setIsLoaded(true)
			setLeagues(leagues)
		}

		loadLeagues()
	}, [])

	return (
		isLoaded ?
			<div>
				<h1>Cross Country Sim</h1>
				<div className={classes.container}>
					{leagues?.map((league) => (
						<LeagueBlock
							deleteLeague={deleteLeague}
							leagueName={league.name}
						></LeagueBlock>
					))}
				</div>
				<a href="/create">New League</a>
			</div> :
			<div>
				<h1>Loading...</h1>
			</div>
	)
}

export default Home;
