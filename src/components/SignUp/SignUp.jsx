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

            // assign each doc field a value
            displayName: document.getElementById('username').value,
            University: document.getElementById("university").value,
            email: document.getElementById("email").value

        }).then(() => {
            user.updateProfile({
                displayName: document.getElementById("university").value,
                photoURL: document.getElementById("university").value,
            }).then(function () {
                console.log("further info has been added");
                console.log(user.displayName);

            }).catch(function (error) {
                // An error happened.
                console.log(error.message);
            });
            console.log(" user document successfully written!");

        }).catch(function (error) {
            console.error("Error writing document: ", error);
        });
}


// creates a user
function createUser(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password).then(() => {
        var user = auth.currentUser;
        // we are not allowed to create additional
        // fields for authentication
        //so we must use fields already
        //provided by firebase
        user.updateProfile({
            // university name
            displayName: document.getElementById('university').value,

            // student or teacher
            photoURL: document.getElementById('studentTeacher').value,
        }).then(function () {
            console.log(user.displayName);

        }).catch(function (error) {
            console.log('could not add username');

        });

        createUserDoc(user)

        // Empty the input once the user has signed up
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        document.getElementById('username').value = ''
        console.log(user.displayName.value);

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });
}

const SignUp = props => {
    return (
        <React.Fragment>
            <form onSubmit={createUser} autocomplete="on" >
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
                <div>
                    <label>Are you a Student or Teacher</label>
                    <select id="studentTeacher">
                        <option value="teachers">Teachers</option>
                        <option value="students">Student</option>
                    </select>
                </div>
                
                <button >Sign Up</button>
                <Link to="SignIn" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}><button >Sign In</button></Link>


            </form>

        </React.Fragment>
    );
}
export default SignUp;