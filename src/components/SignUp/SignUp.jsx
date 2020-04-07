import React, { useState, useEffect, Component } from 'react'
import firebase from '../../firebase/index'
import { auth, storage } from '../../firebase/index'
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';


// Adds a document to the teachers' collection
// with more inf about the teacher. The name of the dorument is the 
// key value genereated for uid
function createUserDoc(user) {
    firebase.firestore().collection(document.getElementById("university").value).doc("users")
        .collection('teachers').doc(user.uid).set({

            displayName: document.getElementById('username').value,
            University: document.getElementById("university").value,
            email: document.getElementById("email").value

        }).then(() => {
            console.log(" user document successfully written!");

        }).catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

// Adds username to the user
function AddUserName(user) {
    user.updateProfile({
        displayName: document.getElementById('username').value,
    }).then(function () {
        console.log("further info has been added");
        console.log(user.displayName);

    }).catch(function (error) {
        // An error happened.
        console.log(error.message);
    });

}

// creates a user
function createUser(event) 
{
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password).then(() => 
    {
        var user = auth.currentUser;
        AddUserName(user)
        createUserDoc(user)

        // Empty the input once the user has signed up
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        document.getElementById('email').value = ''
        document.getElementById('usernam').value = ''

    }).catch(function (error) 
    {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });
}

const SignUp = props => {
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
                <label>
                    Name:
                    <textarea id="username" />
                </label>
                <div>
                    <label>University</label>
                    <select id="university">
                        <option value="fau">FAU</option>
                        <option value="fsu">Florida State University</option>
                    </select>
                </div>

                <button >Sign Up</button>
            </form>
            <Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>Home</Link>
        </React.Fragment>
    );
}
export default SignUp;