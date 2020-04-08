import React, { Component } from 'react';
import './App.css';
import CheckForLeagueDatabase from './Scripts/IndexedDb/MainMenu';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CreateLeagueForm from './Components/CreateLeagueForm'
import Home from './Components/Home'
class App extends Component {


  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/create" component={CreateLeagueForm}></Route>
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
