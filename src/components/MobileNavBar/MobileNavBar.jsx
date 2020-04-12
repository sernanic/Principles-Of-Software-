import React, { Component } from 'react';
import firebase from '../../firebase/index'
import { auth, storage } from '../../firebase/index'
import { Link } from 'react-router-dom';
// import './SIgnUp.css'
import ProFile from './ProFile'
// Import Materialize
import M from "materialize-css";
import './MobileNavBar.css'


class MobileNavBar extends Component {
    constructor(props) 
    {
        super(props);
        var email = ''
        var profileImageUrl = ''
        var displayName = 'mom'
       
        this.state = {
            userEmail: email,
            userProfileImage: profileImageUrl,
            userdisplayName: displayName
        }

    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
        
        
        return (
            <nav>
                <div class="nav-wrapper NavConatiner" >
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons" style={{color:'black'}}>menu</i></a>
                    
                    <ul class="sidenav" id="mobile-demo">
                        <div >
                            <ProFile/>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <ul>
                                <li style={{width:'100%',textAlign:'center'}}><Link to="/" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Home</Link></li>

                                <li style={{width:'100%',textAlign:'center'}}>
                                    <Link to="researchOpportunity" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }} >Add research Opportunity</Link>
                                </li>
                                <li style={{width:'100%',textAlign:'center'}}><Link to="SignUp" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Sign Up</Link></li>
                                <li style={{width:'100%',textAlign:'center'}}> <Link to="SignIn" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Sign In</Link></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default MobileNavBar;