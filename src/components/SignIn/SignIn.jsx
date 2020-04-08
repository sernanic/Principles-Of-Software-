import React, { useState, useEffect, Component } from 'react'
import firebase from '../../firebase/index'
import { auth, storage } from '../../firebase/index'
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from '../Home/Home'


function createUser(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        var user = auth.currentUser;
        // Empty the input once the user has signed up
        console.log('user ' + user.email + ' signed in');

    }).catch(function (error) {
        // Handle Errors here.
        console.log(error.message);

    });
}

const SignIn = props => {
    return (
        <React.Fragment>
            <form onSubmit={createUser}>
                <label>
                    Email:
                    <textarea id="email" />
                </label>
                <label>
                    Password:
                    <textarea id="password" />
                </label>
                <div>
                    <label>University</label>
                    <select id="university">
                        <option value="fau">FAU</option>
                        <option value="fsu">Florida State University</option>
                    </select>
                </div>
                <button >Sign In</button>
            </form>
            <Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>Home</Link>
            
        </React.Fragment>
    );
}
export default SignIn;