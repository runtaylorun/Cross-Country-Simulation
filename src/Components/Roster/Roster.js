import React from 'react'
import '../../CSS/Roster.module.css'
import GenerateRoster from '../../Scripts/init'

function Roster(props) {
    const rosterData = GenerateRoster();

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>Overall</th>
                <th>Speed</th>
                <th>Endurance</th>
                <th>Hills</th>
                <th>Durability</th>
            </tr>
            </thead>
            <tbody>
                {rosterData.map(player => 
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.grade}</td>
                        <td>{player.overall}</td>
                        <td>{player.speed}</td>
                        <td>{player.endurance}</td>
                        <td>{player.hills}</td>
                        <td>{player.durability}</td>
                    </tr>
                    )}
            </tbody>
        </table>
    );
}

export default Roster;