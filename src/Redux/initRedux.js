import { getUserTeam } from '../scripts/indexedDb/userServices'
import { getTeams } from '../scripts/indexedDb/teamServices'
import { getSeason } from '../scripts/indexedDb/seasonServices'
import { getSchedule } from '../scripts/indexedDb/scheduleServices'
import { getRosterById } from '../scripts/indexedDb/playerServices'
import { setLeagueName, setTeams, setSchedule, setLeagueInitialized } from './slices/league'
import { setTeam, setRoster } from './slices/team'
import { setWeek, setYear } from './slices/season'

export const initRedux = async (leagueName, dispatch) => {
  const team = await getUserTeam(leagueName)
  const teams = await getTeams(leagueName)
  const season = await getSeason(leagueName)
  const schedule = await getSchedule(leagueName)
  const roster = await getRosterById(leagueName, team.teamId)

  dispatch(setWeek(season.week ?? 1))
  dispatch(setYear(season.year ?? 2020))
  dispatch(setTeams(teams ?? []))
  dispatch(setSchedule(schedule ?? []))
  dispatch(setTeam(team ?? {}))
  dispatch(setRoster(roster ?? []))
  dispatch(setLeagueName(leagueName))
  dispatch(setLeagueInitialized())
}
