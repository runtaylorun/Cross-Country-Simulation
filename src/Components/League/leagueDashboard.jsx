import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import { getTeam, getWeek } from '../../Redux/selectors'
import classes from '../../CSS/leagueDashboard.module.css'

const LeagueDashboard = () => {
    const userTeam = useSelector(getTeam)
    const leagueWeek = useSelector(getWeek)

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.headerGroupText}>
                    <h1>{userTeam.name}</h1>
                    <p
                        style={{
                            fontSize: '15px',
                            marginBottom: '0',
                            marginTop: '0'
                        }}
                    >
                        {`(Week ${leagueWeek})`}
                    </p>
                </div>
            </div>
            <div className={classes.footer}></div>
            <Outlet />
        </div>
    )
}

export default LeagueDashboard
