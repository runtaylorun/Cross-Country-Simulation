import classes from '../../CSS/navbar.module.css'
import { getLeagueName } from '../../Redux/selectors'
/* import { simulateRace } from '../../Scripts/race' */
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
/* import { simulateWeek } from '../../Scripts/seasonSimulation/simulateWeek'; */

const Navbar = () => {
    const leagueName = useSelector(getLeagueName)
    const { pathname } = useLocation()

    const simulate = async () => {
        /* await simulateWeek(leagueName); */
    }

    return pathname === '/' ||
        pathname === '/create' ||
        leagueName === '' ? null : (
        <div className={classes.nav}>
            <div className={classes.navLeft}>
                <Link to="/">XC Simulation</Link>
                <p onClick={() => simulate()}>Simulate Week</p>
            </div>
            <div className={classes.navRight}>
                <div className={classes.navRight}>
                    <div className={classes.dropdown}>
                        <button>League</button>
                        <div className={classes.dropdownContent}>
                            <Link to={`/league/${leagueName}`}>Home</Link>
                            <Link to={`/league/${leagueName}/standings`}>
                                Standings
                            </Link>
                            <Link to={`/league/${leagueName}/schedule`}>
                                Schedule
                            </Link>
                        </div>
                    </div>
                    <div className={classes.dropdown}>
                        <button>Team</button>
                        <div className={classes.dropdownContent}>
                            <Link to={`/league/${leagueName}/team/roster`}>
                                Roster
                            </Link>
                            <Link to={`/league/${leagueName}/team/schedule`}>
                                Schedule
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
