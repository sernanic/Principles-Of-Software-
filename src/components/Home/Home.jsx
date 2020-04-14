import React, { useState, useEffect, createContext } from 'react'
import HorizontalScroll from '../horizontalScroller/HorizontalScroll'
import RecentOpportunities from '../RecentOpportunities/Container/RecentOpportunities'
import SideNav from "../SideNav/SideNav"
import auth from '../../firebase/index'
import { UserConsumer } from '../../UserProvider'
import SearchBar from '../../components/SearchBar/SearchBar'
import firebase from '../../firebase'
import MobileNavBar from '../MobileNavBar/MobileNavBar'
import './Home.css'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import { UserInfoContext } from '../../UserProvider'
import MostPopular from '../MostPopular/MostPopular'
import AddResearchPost from '../AddOpportunity/AddResearchPost'
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
        const [userStatus, setUserStatus] = useState()

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
            setUserStatus(doc.data().userStaus)

        }).catch(function (error) {
            console.log(error);
            console.log(error.message);
        });
<<<<<<< HEAD
        return [userEmail, userdisplayName, userProfileImage, userfavoriteSubject, userUniversity]
    }
    function UserPost() {
        const array = []
        useEffect((newInfo) => {
            const unsubscribe = firebase.firestore().collection(firebase.auth().currentUser.displayName).doc("researchPapers").collection("AllResearchPapers").orderBy("dataPosted", "desc").limit(6)
                .onSnapshot((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        array.push(doc.data().imageUrl)
                        console.log()
                    });
                });
            return () => unsubscribe()
        }, [])
        return array
    }
    const userInfo = GetuserInfo()
    const paper = UserPost()
=======
        return [userEmail, userdisplayName, userProfileImage, userfavoriteSubject, userUniversity, userStatus]
    }

>>>>>>> upstream/master

    var user = firebase.auth().currentUser
    if (user) {
        const userInfo = GetuserInfo()
        
        return (
            <React.Fragment>
                
                <div style={{ flex: 1, justifyContent: 'space-between', overflowX: 'hidden' }}>

                    <UserInfoContext.Provider value={userInfo}>
                        <div style={{display:'none'}}>
                            <AddResearchPost/>
                        </div>
                        <SideNav />
                        <div className="InfoContainer" >
                            {/* <SearchBar /> */}
                            <div className="mobileContainer">
                                <MobileNavBar />
                            </div>

                            {/* <MostPopular /> */}
                            <div style={{ height: '30%' }}>
                                <h1 className="opportunityTitle" style={{ fontSize: '24px' }}><b>Recent Opportunites</b></h1>
                                <RecentOpportunities />
                            </div>
                            <hr className="seperator" style={{ color: 'black', width: '100%', marginTop: '0%' }}></hr>
                            <h2 className="mainSubject" style={{ fontSize: '24px' }}><b>{userInfo[3]}</b></h2>
                            <HorizontalScroll />
                        </div>
                    </UserInfoContext.Provider>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <div>

<<<<<<< HEAD
                {/* <SearchBar /> */}
                <MobileNavBar hello='sup' />
                <div>
                    <h1 className="opportunityTitle" style={{ fontSize: '24px' }}>Recent Opportunites</h1>
                    <RecentOpportunities />
                </div>
                <div id="carousel-container">
                    <h1 className="carouselClass" style={{ fontSize: '24px' }}>Recent Published Papers</h1>
                </div>
                <h2 className="mainSubject">{userInfo[4]}</h2>
                <h2 className="mainSubject">{userInfo[3]}</h2>
                <HorizontalScroll />
=======
                <div className="container grey lighten-3 z-depth-1" style={{
                    flex: 1, flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', borderRadius: '10px', marginTop: '5%'
                }}>
                    <h1 style={{ fontSize: "24px" }}>Hello, you are not signed in</h1>
                    <div className="authButtons">
                        <Link to="SignIn" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>
                            <button className="btn z-depth-1 buttonStyle" style={{ margin: '5px' }}>Sign In</button>
                        </Link>
                        <Link to="SignUp" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>
                            <button className="btn z-depth-1 buttonStyle" style={{ margin: '5px' }}>Sign Up</button>
                        </Link>
                    </div>
                </div>
>>>>>>> upstream/master
            </div>
        )
    }


}

export default Home;