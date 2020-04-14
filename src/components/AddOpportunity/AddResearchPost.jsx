import React, { useState, Component } from 'react'
import firebase from '../../firebase'
import { storage } from '../../firebase/index'
import SideNav from '../SideNav/SideNav'
import './AddOpportunity.css'
import { Link } from 'react-router-dom'
import { UserInfoContext } from '../../UserProvider'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
class AddResearchPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
            researchCategory: '',
            position: '',
            description: '',
            profName: '',
            userStatus: '',

        }

        this.OnSubmit = this.OnSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.GetuserStatus = this.GetuserStatus.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }


    handleUpload = () => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });

                })
            });
    }


    OnSubmit = e => {
        e.preventDefault()
        this.handleUpload()
        let { researchCategory } = this.state;
        let { position } = this.state;
        let { description } = this.state;
        let { profName } = this.state;
        const { image } = this.state;
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var dt = new Date();
        var secs = (dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours())) * today.getDate();

        console.log(image.name)
        var newUrl = ''
        // Create a reference to the file we want to download
        let storeRef = firebase.storage().ref().child(`images/${image.name}`);
        storeRef.getDownloadURL().then(function (output) {

            var randomInt = Math.ceil(Math.random(1000) * 10)
            var postId = firebase.auth().currentUser.uid + '|' + randomInt

            console.log('going to set document');
            var universityName = firebase.auth().currentUser.displayName
            console.log(universityName);
            console.log(document.getElementById("researchCategory").value);
            console.log(randomInt);


            firebase.firestore().collection(firebase.auth().currentUser.displayName).doc("posts").collection(document.getElementById("researchCategory").value).doc(postId).set({
                id: postId,
                position: position,
                category: document.getElementById("researchCategory").value,
                description: description,
                professorName: profName,
                datePosted: date,
                dateInSeconds: secs,
                imageUrl: output,
                views: 0
            }).then(() => {
                // this.setState({ opportunityName: "" })
                // this.setState({ description: "" })
                researchCategory = ''
                console.log("Document successfully written in catetegory document!");
            }).catch(function (error) {
                console.error("Error writing document: ", error);
            });


            firebase.firestore().collection(firebase.auth().currentUser.displayName).doc("posts").collection("allResearchPost").doc(postId).set({

                // assign each doc field a value
                id: postId,
                position: position,
                category: document.getElementById("researchCategory").value,
                description: description,
                professorName: profName,
                datePosted: date,
                imageUrl: output,
                views: 0

            }).then(() => {

                researchCategory = ''
                firebase.firestore().collection(firebase.auth().currentUser.displayName).doc('users')
                    .collection("allUsers").doc(firebase.auth().currentUser.uid).collection('userPosts').doc(postId).set({
                        // assign each doc field a value
                        id: postId,
                        position: position,
                        category: document.getElementById("researchCategory").value,
                        description: description,
                        professorName: profName,
                        professorEmail: firebase.auth().currentUser.email,
                        datePosted: date,
                        imageUrl: output,
                        views: 0,
                    }).then(() => {
                        console.log('user post has been added to his collection of posts');

                    }).catch(function (error) {
                        console.log('user post has NOT been added to his collection of posts');
                    })
                console.log("Document successfully written in allResearchPost!");

            }).catch(function (error) {
                console.error("Error writing document: ", error);
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
    }
    GetuserStatus = () => {

        const docRef = firebase.firestore().collection(firebase.auth().currentUser.displayName).doc('users')
            .collection('allUsers').doc(firebase.auth().currentUser.uid)
        docRef.get().then(function (doc) {
            console.log(doc.data().userStaus);

            const userStatus = doc.data().userStaus
            this.setState(() => ({ userStatus }));


        }).catch(function (error) {
            console.log(error);
            document.getElementById('erroMessage').style.display = 'block'
            document.getElementById('erroMessage').textContent = error.message
        });
    }

    render() {
        const userStatus = this.state.userStatus
        console.log(userStatus);

        if (userStatus != 'teachers') {
            return (
                <React.Fragment>

                    <UserInfoContext.Consumer>
                        {(userInfo) => {
                            return (
                                <div className="addResearchContainer">

                                    <div style={{flex:1,flexDirection:'column'}}>

                                        <form onSubmit={this.OnSubmit} className="grey lighten-3 z-depth-1 " style={{
                                            flex: 1, flexDirection: 'column', justifyContent: 'center',
                                            alignItems: 'center', borderRadius: '10px',
                                        }} >

                                            <h4 style={{ marginTop: '5%', alignSelf: 'center' }}>Add Research Opportunity</h4>

                                            <Form.Group controlId="password">
                                                <Form.Control type="text" placeholder="Research Position Name" value={this.position} onChange={(x) =>
                                                    this.setState({ position: x.currentTarget.value })
                                                } />
                                            </Form.Group>


                                            <Form.Control as="select" custom required id='researchCategory'>
                                                <option value="" disabled selected>Category</option>
                                                <option value="Computer Science">Computer Science</option>
                                                <option value="Biology">Biology</option>
                                            </Form.Control>


                                            <textarea type="text"  rows="30"value={this.description} onChange={(x) =>
                                                this.setState({ description: x.currentTarget.value })
                                            } placeholder="Research Description" />


                                            <input type="text" value={this.profName} onChange={(x) =>
                                                this.setState({ profName: x.currentTarget.value })
                                            } placeholder="Your Name" />


                                            <input type="file" onChange={this.handleChange.bind(this)} required />
                                            <br />
                                            <Image src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400" rounded />

                                            <button className=" btn z-depth-1 buttonStyle" >Add Research Post</button>
                                            <button className=" btn z-depth-1 buttonStyle">
                                                <Link to="/" style={{ textDecoration: "none", color: "#1B274A", zIndex: '100' }}>Home</Link>
                                            </button>

                                            <p id="erroMessage"></p>
                                        </form>
                                    </div>

                                </div>
                            )
                        }}
                    </UserInfoContext.Consumer>

                </React.Fragment>

            )
        } else {
            return (
                <div>
                    <h1>you do not seem to have access to this feature</h1>
                </div>
            )
        }
    }

}

export { AddResearchPost as default } 
