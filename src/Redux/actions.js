import { SET_USER_PROPERTIES } from './actionTypes'

export const setUserProperties = (user) => {
    return {
        type: SET_USER_PROPERTIES,
        payload: user
    }
}
