import React, { Component } from 'react';
import firebase from '../../firebase/index'
import { auth, storage } from '../../firebase/index'
import { Link } from 'react-router-dom';
// import './SIgnUp.css'

// Import Materialize
import M from "materialize-css";


class MobileNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: null,
            userProfileImage: '',
            userdisplayName: 0,
        }

        this.GetuserInfo = this.GetuserInfo.bind(this);


    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }



    GetuserInfo = () => {

        try {
            const docRef = firebase.firestore().collection(auth.currentUser.displayName).doc('users').collection('allUsers').doc(firebase.auth().currentUser.uid)
            docRef.get().then(function (doc) {

                // gets user email
                const email = doc.data().email
                this.setState(() => ({ email }));

                // gets user profileImageUrl
                const profileImageUrl = doc.data().profileImageUrl
                this.setState(() => ({ profileImageUrl }));

                // gets user displayName
                const displayName = doc.data().displayName
                this.setState(() => ({ displayName }));

            }).catch(function (error) {
                console.log("Error getting cached document:", error);

            });

        }
        catch (err) {
            console.log(err.message);

        }
    }

    render() {
        // const userInfo = this.GetuserInfo
        return (
            <nav>
                <div class="nav-wrapper">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    
                    <ul class="sidenav" id="mobile-demo">
                        <div>
                            <li><img src={this.state.profileImageUrl} alt="" height="100" width="100" className="profileImage" /></li>
                            <li><b style={{ marginLeft: "30px", textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>{this.state.displayName}</b></li>
                            <li><font size="2" style={{ marginLeft: "28px", textDecoration: "none", color: "#9FA3AF", zIndex: '100' }}>{this.state.email}</font></li>
                        </div>
                        <br />
                        <br />
                        <div>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <ul>
                                <li><i class="fa fa-home" style={{ color: "#9FA3AF" }}></i> <Link to="/" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Home</Link></li>
                                
                                <li><i class="fa fa-plus-square" style={{ color: "#9FA3AF" }}></i>
                                    <Link to="researchOpportunity" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }} >Add research Opportunity</Link>
                                </li>
                                <li><i class="fa fa-address-card-o" style={{ color: "#9FA3AF" }}></i> <Link to="SignUp" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Sign Up</Link></li>
                                <li><i class="fa fa-sign-in" aria-hidden="true" style={{ color: "#9FA3AF" }}></i> <Link to="SignIn" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Sign In</Link></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </nav>
            
        )
    }
}

export default MobileNavBar;