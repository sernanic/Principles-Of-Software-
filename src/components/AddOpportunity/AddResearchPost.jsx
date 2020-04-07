import React, { useState, Component } from 'react'
import firebase from '../../firebase'
import { storage } from '../../firebase/index'
import Drawer from '../Drawer/Drawer'
const University = firebase.firestore().collection("fau")

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
        let { position } = this.state;
        let { description } = this.state;
        let { profName } = this.state;
        const { image } = this.state;
        const { url } = this.state;
        researchCategory = document.getElementById("researchCategory").value
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        console.log(image.name)
        var newUrl = ''
        // Create a reference to the file we want to download
        let storeRef = firebase.storage().ref().child(`images/${image.name}`);
        storeRef.getDownloadURL().then(function (output) {
        
            firebase.firestore().collection("fau").doc("fauInfo").collection(researchCategory).doc(position).set({
                position: position,
                category: researchCategory,
                description: description,
                professorName: profName,
                datePosted: date,
                imageUrl: output
            }).then(() => {
                // this.setState({ position: "" })
                // this.setState({ description: "" })
                researchCategory = ''
                console.log("Document successfully written!");

            }).catch(function (error) {
                console.error("Error writing document: ", error);
            });


            firebase.firestore().collection("fau").doc("fauInfo").collection("allResearchPost").doc(position).set({
                position: position,
                category: researchCategory,
                description: description,
                professorName: profName,
                datePosted: date,
                imageUrl: output
            }).then(() => {
                // this.setState({ position: "" })
                // this.setState({ description: "" })
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
            
            <form onSubmit={this.OnSubmit}>
                <Drawer/>
                <h4>Add time entry form</h4>
                <div style={{marginLeft:'300px'}}>
                    <label>Research Position Name</label>
                    <input type="text" value={this.position} onChange={(x) =>
                        this.setState({ position: x.currentTarget.value })
                    } />
                </div>
                <div style={{marginLeft:'300px'}}>
                    <label>Category</label>
                    <select id="researchCategory">
                        <option value="Computer Science">Computer Science</option>
                        <option value="Biology">Biology</option>
                    </select>
                </div>
                <div style={{marginLeft:'300px'}}>
                    <label>Research Description</label>
                    <input type="text" value={this.description} onChange={(x) =>
                        this.setState({ description: x.currentTarget.value })
                    } />
                </div>
                <div style={{marginLeft:'300px'}}>
                    <label>Your Name</label>
                    <input type="text" value={this.profName} onChange={(x) =>
                        this.setState({ profName: x.currentTarget.value })
                    } />
                </div>
                <div  style={{marginLeft:'300px'}}>
                    <progress value={this.state.progress} max="100" />
                    <input type="file" onChange={this.handleChange.bind(this)} />
                    <br />
                    <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400" />
                </div>
                <button style={{marginLeft:'300px'}}>Add Research Post</button>
            </form>
        )
    }

}

export { University, AddResearchPost as default } 