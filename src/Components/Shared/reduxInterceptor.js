import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeagueName } from '../../Redux/selectors'
import { reset } from '../../Redux/slices/user'
import { useLocation, Redirect } from 'react-router'

const ReduxInterceptor = ({ children }) => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const leagueName = useSelector(getLeagueName)
    console.log({ leagueName })
    console.log({ pathname })


    useEffect(() => {
        if (pathname === '/' || pathname === '/create') {
            dispatch(reset())
        }
    }, [pathname])

    return (
        ((pathname !== '/' && pathname !== '/create') && leagueName === '') ? <Redirect to='/' /> :
            <>
                {children}
            </>
    )
}

export default ReduxInterceptor