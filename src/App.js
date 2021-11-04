import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateLeagueForm from './Components/Home/createleagueForm'
import LeagueDashboard from './Components/League/leagueDashboard'
import Roster from './Components/Team/Roster/roster'
import Home from './Components/Home/home'
import Standings from './Components/League/standings'
import Navbar from './Components/Shared/navbar'
import TeamSchedule from './Components/Team/Schedule/schedule'
import LeagueSchedule from './Components/League/Schedule/schedule'
import Race from './Components/League/Race/race'
import ReduxInterceptor from './Components/Shared/reduxInterceptor'

const App = () => {
	return (
		<BrowserRouter>
			<ReduxInterceptor>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route path='/create' component={CreateLeagueForm}></Route>
					<Route path='/league/:leagueName' exact component={LeagueDashboard} />
					<Route path='/league/:leagueName/standings' exact component={Standings} />
					<Route path='/league/:leagueName/schedule' exact component={LeagueSchedule} />
					<Route path='/league/:leagueName/team/roster' exact component={Roster} />
					<Route path='/league/:leagueName/team/schedule' component={TeamSchedule} />
					<Route path='/league/:leagueName/race/:week' component={Race} />
				</Switch>
			</ReduxInterceptor>
		</BrowserRouter>
	)
}

export default App
