import { useState, useEffect } from 'react'
import RosterTable from '../rosterTable'
import { GetUserTeam } from '../../../Scripts/IndexedDb/userServices'
import { getRosterById } from '../../../Scripts/IndexedDb/playerServices'
import classes from '../../../CSS/roster.module.css'

const Roster = (props) => {
    const [roster, setRoster] = useState([])
    const [userTeam, setUserTeam] = useState({})
    const { leagueName } = props.match.params

    useEffect(() => {
        const getData = async () => {
            const userTeamData = await GetUserTeam(leagueName)
            const rosterData = await getRosterById(
                leagueName,
                userTeamData.teamId
            )

            setUserTeam(userTeamData)
            setRoster(rosterData)
        }

        getData()
    }, [])

    return (
        <div className={classes.container}>
            <RosterTable roster={roster} />
        </div>
    )
}

export default Roster
