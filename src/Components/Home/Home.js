import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getLeagues, deleteLeague as deleteLeagueDatabase } from '../../Scripts/IndexedDb/leagueServices'
import LeagueBlock from './leagueBlock'
import classes from '../../CSS/Home/home.module.css'

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [leagues, setLeagues] = useState([])

  const deleteLeague = async (leagueName) => {
    await deleteLeagueDatabase(leagueName)

    window.location.reload()
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
    isLoaded
      ? <div>
				<h1>Cross Country Sim</h1>
				<div className={classes.container}>
					{leagues?.map((league) => (
						<LeagueBlock
							key={league.name}
							deleteLeague={deleteLeague}
							leagueName={league.name}
						></LeagueBlock>
					))}
				</div>
				<Link to='/create'>New League</Link>
			</div>
      : <div>
				<h1>Loading...</h1>
			</div>
  )
}

export default Home
