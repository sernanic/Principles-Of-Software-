import React, { useState, useEffect, Component } from 'react'
import firebase from '../../firebase/index'
import { auth, storage } from '../../firebase/index'
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from '../Home/Home'
import { withRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";





const SignIn = props => {
    function SignInUser(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            console.log('yese');

            // redirect user to the home page
            setTimeout(()=>{
                props.history.push('/')
            },2000)
    
        }).catch(function (error) {
    
            // Handle Errors here.
            console.log(error.message);
    
        });
        
    }
    return (

        <React.Fragment>
            <form onSubmit={SignInUser} className="container grey lighten-3 z-depth-1" style={{
                flex: 1, flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', borderRadius: '10px', marginTop: '5%'
            }}>
                <div class="input-field" style={{marginTop:'8%'}}>
                    <input type="email" id="email" required />
                    <label for="signup-email">Email address</label>
                </div>
                <div class="input-field">
                    <input type="password" id="password" required/>
                    <label for="signup-password">Choose password</label>
                </div>
                <div style={{flex: 1, flexDirection: 'row',width:'30%',marginBottom:'10%'}}>
                    
                    <Link to="SignUp" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>
                        <button className="btn z-depth-1 buttonStyle">Sign Up</button>
                    </Link>

                    <button className="btn z-depth-1 buttonStyle">Sign In</button>
                </div>
            </form>

        </React.Fragment>
    );
}
export default SignIn;