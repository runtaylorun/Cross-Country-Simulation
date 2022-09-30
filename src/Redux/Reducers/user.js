import { SET_USER_PROPERTIES } from '../actionTypes'

const initialState = {
  userTeamId: 0
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROPERTIES:
      return {
        userTeamId: action.payload.user.userTeamId
      }
    default:
      return state
  }
}

export default userReducer
