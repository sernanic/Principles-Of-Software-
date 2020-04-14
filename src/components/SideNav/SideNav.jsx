import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./SideNav.css";
import { auth } from '../../firebase/index'
import firebase from '../../firebase'
import SearchResults from '../SearchResults/SearchResults'
import { UserInfoContext } from '../../UserProvider'


// returns array of [email, displayName, profileImageUrl]
const SideNav = props => {
    function GetUserStatus() {

        // Teachers and Students are stored in the same collection
        const docRef = firebase.firestore().collection(firebase.auth().currentUser.displayName).doc('users')
            .collection('allUsers').doc(firebase.auth().currentUser.uid)
        docRef.get().then(function (doc) {

            if(doc.data().userStaus == 'students'){
                document.getElementById('statusTeacher').style.display ='none'
            }

        }).catch(function (error) {
            console.log(error);
            console.log(error.message);
        });
    }
    GetUserStatus()
    return (

        <UserInfoContext.Consumer>
            {(userInfo) => {
                return (
                    <div className="mainDrawer">

                        <ul>
                            {/* Profile Info */}
                            <div>
                                <li><img src={userInfo[2]} alt="" height="100" width="100" className="profileImage" /></li>
                                <li><b style={{ marginLeft: "30px", textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>{userInfo[1]}</b></li>
                                <li><font size="2" style={{ marginLeft: "28px", textDecoration: "none", color: "#9FA3AF", zIndex: '100' }}>{userInfo[0]}</font></li>
                            </div>
                            <br />
                            <br />
                            {/* Navigation Links */}
                            <div>
                                {/* Import Icons */}
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                <ul>
                                    <li>
                                        <NavLink to="/" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }} activeStyle={{ color: 'teal' }}><i class="fa fa-home"></i>Home</NavLink>
                                    </li>
                                    <li id="statusTeacher" value={userInfo[5]}><i class="fa fa-plus-square" style={{ color: "#9FA3AF" }}></i>
                                        <NavLink to="researchOpportunity" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }} activeStyle={{ color: 'teal' }} >Add research Opportunity</NavLink>
                                    </li>
                                    <li><i class="fa fa-address-card-o" style={{ color: "#9FA3AF" }}></i>
                                        <NavLink to="SignUp" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Sign Up</NavLink>
                                    </li>
                                    <li><i class="fa fa-sign-in" aria-hidden="true" style={{ color: "#9FA3AF" }}></i>
                                        <NavLink to="SignIn" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Sign In</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                 </div>
                )
            }}
        </UserInfoContext.Consumer>
    )
}


export default SideNav;

