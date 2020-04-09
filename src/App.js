

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home'
import { auth } from './firebase/index'
import { Link } from 'react-router-dom';
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import UserProvider from './UserProvider'
import 'materialize-css/dist/css/materialize.min.css';
const App = () => {
    var user = auth.currentUser
    if (user) {
        return (
            <div>
                <UserProvider value={auth.currentUser}>
                    <Home mainSubject="Biology" />
                </UserProvider>
            </div>
        )
    } else {
        return (
            <div>
                <React.Fragment>
                    <h1>hello, you are not signed in</h1>
                    <div className="authButtons">
                        <Link to="SignIn" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}><button >Sign In</button></Link>
                        <Link to="SignUp" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}><button >Sign Up</button></Link>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
export default App;