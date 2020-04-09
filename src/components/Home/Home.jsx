import React, { useState, useEffect } from 'react'
import HorizontalScroll from '../horizontalScroller/HorizontalScroll'
import VerticalScroll from '../VerticalScroll/VerticalScroll'
import AddResearchPost from '../AddOpportunity/AddResearchPost'
import SideNav from "../SideNav/SideNav"
import auth from '../../firebase/index'
import { UserConsumer } from '../../UserProvider'
import SearchBar from '../../components/SearchBar/SearchBar'
import firebase from '../../firebase'
import {userEmail, userdisplayName, userProfileImage,favoriteSubject,University} from '../../getUserInfo/getUserInfo'

import './Home.css'

   
const Home = props => {


     // returns array of [email, displayName, profileImageUrl]
    // When using states and functions 
    //the function name must start with a capital letter
    
    function GetuserInfo() {
        const [userEmail, setuserEmail] = useState()
        const [userProfileImage, setUserProfileImage] = useState()
        const [userdisplayName, setUserdisplayName] = useState()
        const [userfavoriteSubject, setUserfavoriteSubject] = useState()
        const [userUniversity, setUserUniversity] = useState()

        const docRef = firebase.firestore().collection(firebase.auth().currentUser.displayName).doc('users')
            .collection('allUsers').doc(firebase.auth().currentUser.uid)
        docRef.get().then(function (doc) {
            // Document was found in the cache. If no cached document exists,
            setuserEmail(doc.data().email)
            setUserProfileImage(doc.data().profileImageUrl)
            setUserdisplayName(doc.data().displayName)
            setUserfavoriteSubject(doc.data().favoriteSubject)
            setUserUniversity(doc.data().University)
        }).catch(function (error) {
            console.log("Error getting cached document:", error);
        });

        return [userEmail, userdisplayName, userProfileImage,favoriteSubject,userfavoriteSubject,userUniversity]

    }

    const userInfo = GetuserInfo()
    return (
        <UserConsumer>
            {currentUser => {
                    return (
                        <div style={{flex:1,justifyContent:'space-between',overflowX: 'hidden'}}>
                        
                        <SideNav />
                        {/* <div className="mainView" style={{ overflowY: 'hidden', overflowX: 'hidden' }}> */}

                            <div className="InfoContainer" >
                                {/* <h1>{currentUser}</h1> */}
                                <SearchBar />
                                <div>
                                    {/* <h1>{userEmail}</h1> */}
                                    <h1 className="opportunityTitle" style={{fontSize: '24px'}}>Recent Opportunites</h1>
                                    <VerticalScroll />
                                </div>
                                
                                <h2 className="mainSubject">{userInfo[4]}</h2>
                                <HorizontalScroll />
                            </div>

                        {/* </div> */}
                    </div>
                    )
                }
            }
        </UserConsumer>
    )
}

export default Home;