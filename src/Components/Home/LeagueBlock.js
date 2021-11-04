import React from 'react'
import { useDispatch } from 'react-redux'
import { setTeam, setRoster } from '../../Redux/slices/team'
import { setLeagueName, setTeams, setSchedule } from '../../Redux/slices/league'
import { setWeek, setYear } from '../../Redux/slices/season'
import { getTeams } from '../../Scripts/IndexedDb/teamServices'
import { getSeason } from '../../Scripts/IndexedDb/seasonServices'
import { getSchedule } from '../../Scripts/IndexedDb/scheduleServices'
import { getUserTeam } from '../../Scripts/IndexedDb/userServices'
import { getRosterById } from '../../Scripts/IndexedDb/playerServices'
import { Link } from 'react-router-dom'
import classes from '../../CSS/Home/home.module.css'

const LeagueBlock = ({ leagueName, deleteLeague }) => {
	console.log(leagueName)
	const dispatch = useDispatch()

	const onPlayClick = async () => {
		const team = await getUserTeam(leagueName)
		const roster = await getRosterById(leagueName, team.teamId)
		const teams = await getTeams(leagueName)
		const schedule = await getSchedule(leagueName)
		const season = await getSeason(leagueName)

		dispatch(setWeek(season.week ?? 1))
		dispatch(setYear(season.year ?? 2020))
		dispatch(setTeams(teams ?? []))
		dispatch(setSchedule(schedule ?? []))
		dispatch(setTeam(team ?? {}))
		dispatch(setRoster(roster ?? []))
		dispatch(setLeagueName(leagueName))
	}

	return (
		<div style={{ backgroundColor: 'white' }} className={classes.block}>
			<h1>{leagueName}</h1>
			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
				<button onClick={onPlayClick} className={`${classes.play} ${classes.button}`}>
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
