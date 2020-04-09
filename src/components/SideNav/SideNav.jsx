import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./SideNav.css";
import { auth } from '../../firebase/index'
import firebase from '../../firebase'
import SearchResults from '../SearchResults/SearchResults'
import { UserConsumer } from '../../UserProvider'


// returns array of [email, displayName, profileImageUrl]
const SideNav = props => {
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


        return [userEmail, userdisplayName, userProfileImage]

    }



    try {
        const userInfo = GetuserInfo()
    }
    catch (err) {

        console.log('nope');

    }
    const userInfo = GetuserInfo()

    return (
        <UserConsumer>
            {currentUser => {
                return (
                    <div className="mainDrawer">

                        <ul>
                            <div>
                                <li><img src={userInfo[2]} alt="" height="100" width="100" className="profileImage" /></li>
                                <li><b style={{ marginLeft: "30px", textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>{userInfo[1]}</b></li>
                                <li><font size="2" style={{ marginLeft: "28px", textDecoration: "none", color: "#9FA3AF", zIndex: '100' }}>{userInfo[0]}</font></li>
                            </div>
                            <br />
                            <br />
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
    )


}



export default SideNav;

