

import React from "react";
import Home from './components/Home/Home'
import { auth } from './firebase/index'
import { Link } from 'react-router-dom';
import 'firebase/firebase-auth'
import UserProvider from './UserProvider'
import 'materialize-css/dist/css/materialize.min.css';


const App = () => {
    var user = auth.currentUser
    if (user) {
        return (
            <div>
                <UserProvider value={auth.currentUser}>
                    <Home />
                </UserProvider>
            </div>
        )
    } else 
    {
        return (
            <div>

                <div className="container grey lighten-3 z-depth-1"style={{
                    flex: 1, flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', borderRadius: '10px', marginTop: '5%'
                }}>
                    <h1 style={{fontSize:"24px"}}>Hello, you are not signed in</h1>
                    <div className="authButtons">
                        <Link to="SignIn" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>
                            <button className="btn z-depth-1 buttonStyle" style={{ margin: '5px' }}>Sign In</button>
                        </Link>
                        <Link to="SignUp" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>
                            <button className="btn z-depth-1 buttonStyle" style={{ margin: '5px' }}>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;