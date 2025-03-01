import { createContext, useContext } from 'react'

const UserContext = createContext({})

export default UserContext

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer
