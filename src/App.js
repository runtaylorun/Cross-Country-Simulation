import React from 'react';
import './App.css';
import Roster from './Components/Roster/Roster'
import initializeRosterDb from './Scripts/IndexedDb/initializeDb'
function App() {

  initializeRosterDb();

  return (
    <div className="App">
      <Roster/>
      <button>Simulate Race</button>
    </div>
  );
}

export default App;
