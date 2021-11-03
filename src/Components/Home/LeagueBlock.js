import React from 'react'
import { useDispatch } from 'react-redux'
import { setLeagueName, setRoster, setTeams } from '../../Redux/actions'
import { getUserTeam } from '../../Scripts/IndexedDb/userServices'
import { getRosterById } from '../../Scripts/IndexedDb/playerServices'
import { getTeams } from '../../Scripts/IndexedDb/teamServices'
import { setUserTeam } from '../../Redux/actions'
import { Link } from 'react-router-dom'
import classes from '../../CSS/Home/Home.module.css'

const LeagueBlock = ({ leagueName, deleteLeague }) => {

	const dispatch = useDispatch()

	const onPlayClick = async () => {
		const team = await getUserTeam(leagueName)
		const roster = await getRosterById(leagueName, team.teamId)
		const teams = await getTeams(leagueName)

		dispatch(setTeams(teams ?? []))
		dispatch(setUserTeam(team ?? {}))
		dispatch(setRoster(roster ?? []))
		dispatch(setLeagueName(leagueName))
	}

	const LeagueBlock = ({ leagueName, deleteLeague }) => {
		return (
			<div style={{ backgroundColor: 'white' }} className={classes.block}>
				<h1>{leagueName}</h1>
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
					<button className={`${classes.play} ${classes.button}`}>
						<Link style={{ textDecoration: 'none', color: 'black' }} to={`/league/${leagueName}`}>Play</Link>
					</button>
					<button className={`${classes.delete} ${classes.button}`}>
						<Link style={{ textDecoration: 'none', color: 'black' }} onClick={() => deleteLeague(leagueName)} to='/'>Delete</Link>
					</button>
				</div>
			</div>
		)
	}

	export default LeagueBlock
