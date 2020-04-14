import React, { useState, useEffect, Component } from 'react'
import firebase from '../../firebase/index'
import { auth, storage } from '../../firebase/index'
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import ReactDOM from 'react-dom';
import './SIgnUp.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
            errorMessage: ''
        }

        this.createUser = this.createUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);


    }

    // handle incoming image picked by user
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }


    handleUpload = () => {

        const { image } = this.state;
        const uploadTask = storage.ref(`userImages/${image.name}`).put(image);
        var newImageUrl = ''
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error.message);
            },
            () => {
                // complete function ....
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    newImageUrl = url
                    this.setState({ url });

                })
            });
        return newImageUrl
    }


    // creates a user

    createUser = event => {
        event.preventDefault();
        var email = document.getElementById('signup-email').value;
        var password = document.getElementById('signup-password').value;
        var university = document.getElementById('university').value;
        var studentTeacher = document.getElementById('studentTeacher').value
        var displayName = document.getElementById('displayName').value
        const { image } = this.state;
        const { url } = this.state;
        const { progress } = this.state;
        console.log(progress);
        auth.createUserWithEmailAndPassword(email, password).then(() => {
            var userUID = auth.currentUser.uid;
            this.handleUpload()

            // we are not allowed to create additional
            // fields for authentication
            //so we must use fields already
            //provided by firebase
            // this update function does not work for some reason
            console.log(document.getElementById('studentTeacher').value)

            auth.currentUser.updateProfile({
                // university name
                displayName: university,

                // student or teacher
                photoURL: document.getElementById('favoriteSubject').value,
            }).then(function () {
                let storeRef = firebase.storage().ref().child(`userImages/${image.name}`);
                // get stored image url
                storeRef.getDownloadURL().then(function (ImageUrl) {
                    //Add document in the allUsers' collection with user info
                    firebase.firestore().collection(university).doc("users")
                        .collection('allUsers').doc(userUID).set({

                            // assign each doc field a value
                            displayName: document.getElementById('displayName').value,
                            University: auth.currentUser.displayName,
                            email: auth.currentUser.email,
                            profileImageUrl: ImageUrl,
                            favoriteSubject: document.getElementById('favoriteSubject').value,
                            userStaus: document.getElementById('studentTeacher').value,
                            posts: new Array(50).fill({})

                        }).then(() => {

                            auth.currentUser.updateProfile(
                                {

                                    // university name
                                    displayName: university,
                                    // student or teacher
                                    photoURL: document.getElementById('favoriteSubject').value,
                                }).then(function () {
                                    console.log("further info has been added");

                                }).catch(function (error) {
                                    // An error happened.
                                    console.log(error.message);
                                });
                        }).catch(function (error) {
                            console.error("Error writing document: ", error);
                        });

                }).catch(function (error) {
                    console.log('could not add username');
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);

                });

            }).catch(function (error) {
                switch (error.code) {
                    case 'storage/object_not_found':
                        console.log("File doesn't exist");
                        break;

                    case 'storage/unauthorized':
                        console.log("User doesn't have permission to access the object");
                        break;

                    case 'storage/canceled':
                        console.log("User canceled the upload");
                        break;

                    case 'storage/unknown':
                        console.log("Unknown error occurred, inspect the server response");
                        break;
                }
            });

            // Empty the input once the user has signed up
            email = ''
            password = ''
            displayName = ''
            setTimeout(() => {
                this.props.history.push('/')
            }, 2000)

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
            console.log(error.message);
            var message = 'hello'
            message = error.message
            document.getElementById('erroMessage').style.display = 'block'
            document.getElementById('erroMessage').textContent = message

        });

    }
    render() {
        return (
            <React.Fragment>
                <div style={{ width: '50%', height: '50%'}} className="container grey lighten-3 z-depth-1">
                    <Form>
                        <img src={this.state.url || 'https://w5insight.com/wp-content/uploads/2014/07/placeholder-user-400x400.png'} alt="Uploaded images"
                            height="150" width="150" className="profileImage"/>
                        <Form.File
                            id="custom-file"
                            label="Custom file input"
                            custom
                            onChange={this.handleChange.bind(this)}
                            // style={{width:'26%',marginLifet:'35%'}}
                        />
                        <Form.Group controlId="formBasicEmail" onSubmit={this.createUser}>
                            <Form.Control type="email" placeholder="Enter email" id="signup-email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="displayName">
                            <Form.Control type="text" placeholder="DisplayName" id="displayName" required />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" id="signup-password" required />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom id="studentTeacher" required>
                                <option value="" disabled selected>Are you a Student or Professor</option>
                                <option value='teachers'>Professor</option>
                                <option value="students">Student</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom id="university" required>
                                <option value="" disabled selected>Choose your University</option>
                                <option value="fau">FAU</option>
                                <option value="fsu">Florida State University</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom id="favoriteSubject" required>
                                <option value="" disabled selected>Select your Favorite Subject</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Biology">Biology</option>
                            </Form.Control>
                        </Form.Group>

                        <button className="btn z-depth-1 buttonStyle" onClick={this.createUser}>Sign Up</button>

                        {/* Use Button Instead of button if it does not work */}
                        <Link to="SignIn">
                            <button className="btn z-depth-1 buttonStyle" >
                                Sign In
                        </button>
                        </Link>
                        <p className="erroMessage" id="erroMessage"></p>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUp;
