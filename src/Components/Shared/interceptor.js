import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getLeagueInitialized } from '../../redux/selectors'
import { getLeagues } from '../../scripts/indexedDb/leagueServices'
import { reset } from '../../redux/slices/user'
import { getLeagueNameFromURL } from '../../scripts/lib/util'
import { useLocation } from 'react-router'
import { initRedux } from '../../redux/initRedux'
import Loading from './loading'

const Interceptor = ({ children }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const initialized = useSelector(getLeagueInitialized)
  const leagueNameFromPath = getLeagueNameFromURL(pathname)

  useEffect(() => {
    if (pathname === '/' || pathname === '/create') {
      dispatch(reset())
    }
  }, [pathname, dispatch])

  useEffect(() => {
    const initLeague = async () => {
      if ((leagueNameFromPath !== '') && !initialized) {
        const leagues = await getLeagues()

        if (leagues.some(league => league.name === leagueNameFromPath)) {
          await initRedux(leagueNameFromPath, dispatch)
        } else {
          navigate('/')
        }
      }
    }

    initLeague()
  }, [pathname, initialized, dispatch, leagueNameFromPath])

  return (
    ((leagueNameFromPath !== '') && !initialized) ? <Loading /> : <> {children}</>
  )
}

Interceptor.propTypes = {
  children: PropTypes.node
}

export default Interceptor
