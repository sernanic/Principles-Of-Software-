import React, { useState, useEffect } from 'react'
import HorizontalScroll from '../horizontalScroller/HorizontalScroll'
import RecentOpportunities from '../RecentOpportunities/Container/RecentOpportunities'
import SideNav from "../SideNav/SideNav"
import firebase from '../../firebase'
import MobileNavBar from '../MobileNavBar/MobileNavBar'
import './Home.css'
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';



const Home = props => {

    // Note: When using states in functions,
    //function name must start with a capital letter
    // returns array of [userEmail, userdisplayName, userProfileImage, favoriteSubject, userfavoriteSubject, userUniversity]
    function GetuserInfo() {

        // Declared all states
        // [state,statefunction]
        const [userEmail, setuserEmail] = useState()
        const [userProfileImage, setUserProfileImage] = useState()
        const [userdisplayName, setUserdisplayName] = useState()
        const [userfavoriteSubject, setUserfavoriteSubject] = useState()
        const [userUniversity, setUserUniversity] = useState()

        // Teachers and Students are stored in the same collection
        const docRef = firebase.firestore().collection(firebase.auth().currentUser.displayName).doc('users')
            .collection('allUsers').doc(firebase.auth().currentUser.uid)
        docRef.get().then(function (doc) {

            //get current user info from firebase and
            //set states equal to respective field in database
            setuserEmail(doc.data().email)
            setUserProfileImage(doc.data().profileImageUrl)
            setUserdisplayName(doc.data().displayName)
            setUserfavoriteSubject(doc.data().favoriteSubject)
            setUserUniversity(doc.data().University)

        }).catch(function (error) {
            console.log(error);
            console.log(error.message);
        });
        return [userEmail, userdisplayName, userProfileImage,  userfavoriteSubject, userUniversity]
    }

    
    var user = firebase.auth().currentUser
    if (user) {
        const userInfo = GetuserInfo()
        return (
            <div style={{ flex: 1, justifyContent: 'space-between', overflowX: 'hidden' }}>
    
                <SideNav />
                <div className="InfoContainer" >
    
                    {/* <SearchBar /> */}
                    <MobileNavBar hello = 'sup'/>
                    <div>
                        <h1 className="opportunityTitle" style={{ fontSize: '24px' }}>Recent Opportunites</h1>
                        <RecentOpportunities />
                    </div>
                    <h2 className="mainSubject">{userInfo[3]}</h2>
                    <HorizontalScroll />
                </div>
    
            </div>
        )
    } else 
    {
        return (
            <div>

                <div className="container grey lighten-3 z-depth-1"style={{
                    flex: 1, flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', borderRadius: '10px', marginTop: '5%'
                }}>
                    <h1 style={{fontSize:"24px"}}>Hello, you are not signed in</h1>
                    <div className="authButtons">
                        <Link to="SignIn" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>
                            <button className="btn z-depth-1 buttonStyle" style={{ margin: '5px' }}>Sign In</button>
                        </Link>
                        <Link to="SignUp" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>
                            <button className="btn z-depth-1 buttonStyle" style={{ margin: '5px' }}>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default Home;