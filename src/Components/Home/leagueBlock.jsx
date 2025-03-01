import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classes from '../../CSS/Home/home.module.css'

const LeagueBlock = ({ leagueName, deleteLeague }) => {
    return (
        <div style={{ backgroundColor: 'white' }} className={classes.block}>
            <h1>{leagueName}</h1>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <button className={`${classes.play} ${classes.button}`}>
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to={`/league/${leagueName}`}
                    >
                        Play
                    </Link>
                </button>
                <button className={`${classes.delete} ${classes.button}`}>
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        onClick={() => deleteLeague(leagueName)}
                        to="/"
                    >
                        Delete
                    </Link>
                </button>
            </div>
        </div>
    )
}

LeagueBlock.propTypes = {
    leagueName: PropTypes.string,
    deleteLeague: PropTypes.func
}

export default LeagueBlock
