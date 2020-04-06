import React,{createContext} from 'react'
import {auth} from './firebase/index'


export const UserContext = createContext({ user: null });