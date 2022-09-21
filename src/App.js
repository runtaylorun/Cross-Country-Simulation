import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateLeagueForm from './components/home/createLeagueForm'
import LeagueDashboard from './components/league/leagueDashboard'
import Roster from './components/team/roster/roster'
import Home from './components/home/home'
import Standings from './components/league/standings/standings'
import Navbar from './components/shared/navbar'
import TeamSchedule from './components/team/schedule/schedule'
import LeagueSchedule from './components/league/schedule/schedule'
import Race from './components/league/race/race'
import Interceptor from './components/shared/interceptor'

const App = () => {
  return (
		<BrowserRouter>
			<Interceptor>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='create' element={<CreateLeagueForm/>}/>
					<Route path='league/:leagueName' element={<LeagueDashboard/>} />
					<Route path='league/:leagueName/standings' element={<Standings/>} />
					<Route path='league/:leagueName/schedule' element={<LeagueSchedule/>} />
					<Route path='league/:leagueName/team/roster' element={<Roster/>} />
					<Route path='league/:leagueName/team/schedule' element={<TeamSchedule/>} />
					<Route path='league/:leagueName/race/:week' element={<Race/>} />
				</Routes>
			</Interceptor>
		</BrowserRouter>
  )
}

export default App
