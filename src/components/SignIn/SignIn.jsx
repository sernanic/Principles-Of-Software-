import React, { useState, useEffect, Component } from 'react'
import firebase from '../../firebase/index'
import { auth, storage } from '../../firebase/index'
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from '../Home/Home'
import { withRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'




const SignIn = props => {
    function SignInUser(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            console.log('yese');

            // redirect user to the home page
            setTimeout(() => {
                props.history.push('SignInAnimation')
            }, 50)

        }).catch(function (error) {

            // Handle Errors here.
            console.log(error.message);

        });

    }
    return (

        <React.Fragment>

            <div  style={{marginTop:'10%'}} className="container grey lighten-3 z-depth-1">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" id="email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" id="password" required />
                    </Form.Group>
                    <Link to="SignUp">
                        <button className="btn z-depth-1 buttonStyle">Sign Up</button>
                    </Link>
                    {/* Use Button Instead of button if it does not work */}
                    <button className="btn z-depth-1 buttonStyle" onClick={SignInUser}>
                        Sign In
                    </button>
                </Form>
            </div>


        </React.Fragment>
    );
}
export default SignIn;