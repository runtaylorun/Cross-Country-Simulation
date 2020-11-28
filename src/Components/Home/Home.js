import React, {useState, useEffect} from 'react'
import { getLeagues} from '../../Scripts/IndexedDb/leagueServices'
import { deleteLeague } from '../../Scripts/IndexedDb/leagueServices'
import LeagueBlock from './LeagueBlock'
import styles from '../../CSS/Home/Home.module.css'

const Home = () => {

	const [isLoaded, setIsLoaded] = useState(false)
	const [leagues, setLeagues] = useState([])

	useEffect(() => {

		const loadLeagues = async () => {
			const leagues = await getLeagues()			
			setIsLoaded(true)
			setLeagues(leagues ?? [])		
		}

		loadLeagues()
	}, [])

	const handleLeagueDeletion = async (leagueName) => {
		const response = await deleteLeague(leagueName)

		const leagues = await getLeagues()

		setLeagues(leagues ?? [])
	}

	return (

		isLoaded ? (
			<div>
				<h1>Cross Country Sim</h1>
				<div className={styles.container}>
					{leagues.map((league) => (
						<LeagueBlock
							key={league.name}
							deleteLeague={handleLeagueDeletion}
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
		)
	)
}

export default Home
