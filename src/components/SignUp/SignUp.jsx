import React, { useState, useEffect, Component } from 'react'
import firebase from '../../firebase/index'
import { auth, storage } from '../../firebase/index'
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import ReactDOM from 'react-dom';
import './SIgnUp.css'
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
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

    
    handleUpload = () => 
    {
        
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
        auth.createUserWithEmailAndPassword(email, password).then(() => {
            var userUID = auth.currentUser.uid;
            this.handleUpload()
            
            // we are not allowed to create additional
            // fields for authentication
            //so we must use fields already
            //provided by firebase
            auth.currentUser.updateProfile({
                // university name
                displayName: university,
                // student or teacher
                photoURL: "teachers",
            }).then(function () {
                // the code within this function adds a document to the teachers' collection
                // with more info about the teacher. The name of the dorument is the 
                // key value genereated for uid
                let storeRef = firebase.storage().ref().child(`userImages/${image.name}`);
                storeRef.getDownloadURL().then(function (output) 
                {
                    firebase.firestore().collection(university).doc("users")
                    .collection('teachers').doc(userUID).set({

                        // assign each doc field a value
                        displayName: document.getElementById('displayName').value,
                        University: auth.currentUser.displayName,
                        email: auth.currentUser.email,
                        profileImageUrl: output

                    }).then(() => {
                        console.log('profileImage',
                            firebase.firestore().collection(university).doc("users")
                            .collection('teachers').doc(userUID).profileImage
                        );
                        
                        auth.currentUser.updateProfile({
                            // university name
                            displayName: university,
                            // student or teacher
                            photoURL: studentTeacher,
                        }).then(function () {
                            console.log("further info has been added");
                            console.log(auth.currentUser.photoURL);

                        }).catch(function (error) {
                            // An error happened.
                            console.log(error.message);
                        });
                        console.log(" profile Image and document have been written", auth.currentUser.uid);

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
            console.log(auth.currentUser.displayName.value);

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
            console.log(error.message);
        });
    }
    render() {
        return (
            <React.Fragment>
                <form className="container grey lighten-3 z-depth-1" style={{
                    flex: 1, flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', borderRadius: '10px', marginTop: '5%'
                }} onSubmit={this.createUser}>
                    <div >
                        <img src={this.state.url || 'https://w5insight.com/wp-content/uploads/2014/07/placeholder-user-400x400.png'} alt="Uploaded images" 
                        height="150" width="150" className="profileImage"/>
                        <progress value={this.state.progress} max="100" style={{marginLeft:'30%'}}/>
                        <br />
                        <input type="file" onChange={this.handleChange.bind(this)} style={{marginLeft:'30%'}}/>
                    </div>

                    <div class="input-field">
                        <input type="email" id="signup-email" required />
                        <label for="signup-email">Email address</label>
                    </div>
                    <div class="input-field">
                        <input type="text" id="displayName" />
                        <label for="displayName">Choose Display Name</label>
                    </div>
                    <div class="input-field">
                        <input type="password" id="signup-password" />
                        <label for="signup-password">Choose password</label>
                    </div>


                    <div class="input-field col s12">
                        <select className="select-css browser-default" id="university" style={{ backgroundColor: '#F4F5F9' }}>
                            <option value="" disabled selected>Choose your University</option>
                            <option value="fau">FAU</option>
                            <option value="fsu">Florida State University</option>
                        </select>

                    </div>
                    <div class="input-field col s12">
                        <select className="select-css browser-default" id="studentTeacher">
                            <option value="" disabled selected>Are you a Student or Teacher</option>
                            <option value="teachers">Teachers</option>
                            <option value="students">Student</option>
                        </select>

                    </div>
                    <button className="btn z-depth-1">Sign Up</button>
                    <Link to="SignIn" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>
                        <button className="btn z-depth-1" style={{ margin: '10px' }}>Sign In</button>
                    </Link>
                </form>


            </React.Fragment>
        );
    }
}





export default SignUp;