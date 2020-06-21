import React from 'react';
import { UserProvider } from './Components/Context/UserContext';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateLeagueForm from './Components/Home/CreateLeagueForm';
import LeagueDashboard from './Components/League/LeagueDashboard';
import Home from './Components/Home/Home';

const App = () => {
	const user = {
		managedTeamId: 0,
	};

	return (
		<UserProvider value={user}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/create" component={CreateLeagueForm}></Route>
					<Route
						path="/league/:leagueName"
						exact
						component={LeagueDashboard}
					></Route>
				</Switch>
			</BrowserRouter>
		</UserProvider>
	);
};

export default App;
