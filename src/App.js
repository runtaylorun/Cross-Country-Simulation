import React from 'react'
import Store from './Redux/store'
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateLeagueForm from './Components/Home/CreateLeagueForm'
import LeagueDashboard from './Components/League/LeagueDashboard'
import Roster from './Components/League/Roster/Roster'
import Home from './Components/Home/Home'
import Standings from './Components/League/Standings'
import Navbar from './Components/Shared/Navbar'
import Schedule from './Components/League/Schedule/schedule'

const App = () => {
	return (
		<Provider value={Store}>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route path='/create' component={CreateLeagueForm}></Route>
					<Route path='/league/:leagueName' exact component={LeagueDashboard} />
					<Route path='/league/:leagueName/standings' exact component={Standings} />
					<Route path='/league/:leagueName/roster' exact component={Roster} />
					<Route path='/league/:leagueName/teamSchedule' component={Schedule} />
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}

export default App
