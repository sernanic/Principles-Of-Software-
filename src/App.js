

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home'
import {auth} from './firebase/index'
import { Link } from 'react-router-dom';
import firebase from 'firebase/app' 
import 'firebase/firebase-auth'


const App = () => {
        var user = auth.currentUser
        if (user) {
            return(
                <div>
                    <Home mainSubject="Biology" currentUser = {user.uid} />
                </div>
            )
            
        } else {
            return (
                <div>
                    <React.Fragment>    
                        <h1>hello, you are not signed in</h1>
                        <Link to="SignIn" style={{ textDecoration: "none", color: "black", fontWeight: "600",zIndex:'100' }}>Sign In</Link>
                    </React.Fragment>
                </div>
            )
        }          
}
export default App;