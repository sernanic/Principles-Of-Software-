import React, { useState, Component } from 'react'
import firebase from '../../firebase'
import { storage } from '../../firebase/index'
import SideNav from '../SideNav/SideNav'
import './papers.css'
import { Link } from 'react-router-dom'

const University = firebase.firestore().collection("fau")

class papers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
            researchCategory: '',
            title: '',
            description: '',
            profName: '',
        }

        this.OnSubmit = this.OnSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
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
        let { title } = this.state;
        let { description } = this.state;
        let { profName } = this.state;
        const { image } = this.state;
        const { url } = this.state;
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var dt = new Date();
        var secs = (dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours())) * today.getDate();
        console.log(image.name)
        var newUrl = ''
        // Create a reference to the file we want to download
        let storeRef = firebase.storage().ref().child(`images/${image.name}`);
        storeRef.getDownloadURL().then(function (output) {

            firebase.firestore().collection("fau").doc("researchPapers").collection(researchCategory).doc(title).set({
                title: title,
                category: document.getElementById("researchCategory").value,
                description: description,
                profName: profName,
                datePosted: date,
                dateInSeconds: secs,
                imageUrl: output
            }).then(() => {
                // this.setState({ position: "" })
                // this.setState({ description: "" })
                researchCategory = ''
                console.log("Document successfully written!");

            }).catch(function (error) {
                console.error("Error writing document: ", error);
            });

            firebase.firestore().collection("fau").doc("researchPapers").collection("AllResearchPapers").doc(title).set({

                // assign each doc field a value
                title: title,
                category: document.getElementById("researchCategory").value,
                description: description,
                profName: profName,
                datePosted: date,
                imageUrl: output

            }).then(() => {

                researchCategory = ''
                console.log("Document successfully written!");

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

    render() {
        return (
            <div>
                <form onSubmit={this.OnSubmit} className="container grey lighten-3 z-depth-1" style={{
                    flex: 1, flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', borderRadius: '10px',
                }} >

                    <h4 style={{ marginTop: '5%', alignSelf: 'center' }}>Add Research Opportunity</h4>
                    <div className='marginOnsideNav'>
                        <label>Research Title Name</label>
                        <input type="text" value={this.title} onChange={(x) =>
                            this.setState({ position: x.currentTarget.value })
                        } />
                    </div>
                    <div class="marginOnsideNav input-field col s12">
                        <select className="select-css browser-default" id="researchCategory" required>
                            <option value="" disabled selected>Category</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Biology">Biology</option>
                        </select>

                    </div>

                    <div className='marginOnsideNav'>
                        <label>Research Description</label>
                        <input type="text" value={this.description} onChange={(x) =>
                            this.setState({ description: x.currentTarget.value })
                        } />
                    </div>
                    <div className='marginOnsideNav'>
                        <label>Your Name</label>
                        <input type="text" value={this.profName} onChange={(x) =>
                            this.setState({ profName: x.currentTarget.value })
                        } />
                    </div>
                    <div className='marginOnsideNav'>
                        <progress value={this.state.progress} max="100" />
                        <input type="file" onChange={this.handleChange.bind(this)} />
                        <br />
                        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400" />
                    </div>
                    <button className='marginOnsideNav'>Add Research Post</button>
                    {/* <Link to="/" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Home</Link> */}
                    <button className="searchButton btn z-depth-1 buttonStyle">
                        <Link to="/SignIn" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Home</Link>
                    </button>

                </form>

            </div>
        )
    }

}
export { University, papers as default } 