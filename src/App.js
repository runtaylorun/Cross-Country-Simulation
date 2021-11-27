import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateLeagueForm from './Components/Home/createLeagueForm'
import LeagueDashboard from './Components/League/leagueDashboard'
import Roster from './Components/Team/Roster/roster'
import Home from './Components/Home/home'
import Standings from './Components/League/Standings/standings'
import Navbar from './Components/Shared/navbar'
import TeamSchedule from './Components/Team/Schedule/schedule'
import LeagueSchedule from './Components/League/Schedule/schedule'
import Race from './Components/League/Race/race'
import Interceptor from './Components/Shared/interceptor'

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
