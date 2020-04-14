import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./SideNav.css";
import { auth } from '../../firebase/index'
import firebase from '../../firebase'
import SearchResults from '../SearchResults/SearchResults'
import { UserInfoContext } from '../../UserProvider'


// returns array of [email, displayName, profileImageUrl]
const SideNav = props => {
<<<<<<< HEAD
    // When using states and functions 
    //the function name must start with a capital letter
    function GetuserInfo() {
        const [userEmail, setuserEmail] = useState()
        const [userProfileImage, setUserProfileImage] = useState()
        const [userdisplayName, setUserdisplayName] = useState()
        try {
            const docRefteachers = firebase.firestore().collection(auth.currentUser.displayName).doc('users').collection('allUsers').doc(firebase.auth().currentUser.uid)
            docRefteachers.get().then(function (doc) {
                // Document was found in the cache. If no cached document exists,
                setuserEmail(doc.data().email)
                setUserProfileImage(doc.data().profileImageUrl)
                setUserdisplayName(doc.data().displayName)
            }).catch(function (error) {
                console.log("Error getting cached document:", error);

            });

        }
        catch (err) {
            const docRefStudetns = firebase.firestore().collection(auth.currentUser.displayName).doc('users').collection('studetns').doc(firebase.auth().currentUser.uid)
            docRefStudetns.get().then(function (doc) {
                // Document was found in the cache. If no cached document exists,
                setuserEmail(doc.data().email)
                setUserProfileImage(doc.data().profileImageUrl)
                setUserdisplayName(doc.data().displayName)
            }).catch(function (error) {
                console.log("Error getting cached document:", error);
            });
        }
=======
    function GetUserStatus() {
>>>>>>> upstream/master

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
<<<<<<< HEAD
        <UserConsumer>
            {currentUser => {
=======

        <UserInfoContext.Consumer>
            {(userInfo) => {
>>>>>>> upstream/master
                return (
                    <div className="mainDrawer">

                        <ul>
<<<<<<< HEAD
=======
                            {/* Profile Info */}
>>>>>>> upstream/master
                            <div>
                                <li><img src={userInfo[2]} alt="" height="100" width="100" className="profileImage" /></li>
                                <li><b style={{ marginLeft: "30px", textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>{userInfo[1]}</b></li>
                                <li><font size="2" style={{ marginLeft: "28px", textDecoration: "none", color: "#9FA3AF", zIndex: '100' }}>{userInfo[0]}</font></li>
                            </div>
                            <br />
                            <br />
<<<<<<< HEAD
                            <div>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                <ul>
                                    <li><i class="fa fa-home" style={{ color: "#9FA3AF" }}></i> <Link to="/" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Home</Link></li>
                                    {() => {
                                        if (auth.currentUser.photoURL === 'teachers') {
                                            console.log('hello');

                                        }
                                    }}

                                    <li><i class="fa fa-plus-square" style={{ color: "#9FA3AF" }}></i>
                                        <Link to="researchOpportunity" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }} >Add research Opportunity</Link>
                                    </li>
                                    <li><i class="fa fa-plus-square" style={{ color: "#9FA3AF" }}></i>
                                        <Link to="addPublishedResearchPaper" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }} >Add Published Research Paper</Link>
                                    </li>
                                    <li><i class="fa fa-address-card-o" style={{ color: "#9FA3AF" }}></i> <Link to="SignUp" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Sign Up</Link></li>
                                    <li><i class="fa fa-sign-in" aria-hidden="true" style={{ color: "#9FA3AF" }}></i> <Link to="SignIn" style={{ textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>Sign In</Link></li>
                                </ul>
                            </div>
                        </ul>

                    </div>
                );
            }
            }
        </UserConsumer>
=======
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
>>>>>>> upstream/master
    )
}


export default SideNav;

