import React,{createContext} from 'react'
import {auth} from './firebase/index'


export const UserContext = React.createContext();
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserProvider