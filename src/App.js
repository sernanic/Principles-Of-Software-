

import React, {useState}from  "react";
import { BrowserRouter, Route, Switch,withRouter } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import AddResearchPost from './components/AddOpportunity/AddResearchPost'
import SignUp  from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import OpportunityInfo from './components/OpportunityInfo/OpportunityInfo'
import Home from './components/Home/Home'
import SignInAnimation from './LottieAnimations/signInAnimation'
import SideNav from './components/SideNav/SideNav'
import { UserInfoContext } from './UserProvider'
import firebase from './firebase/index'
import MobileNavBar from './components/MobileNavBar/MobileNavBar'
const App = () => 
{
    function GetuserInfo() {

        // Declared all states
        // [state,statefunction]
        // const [userEmail, setuserEmail] = useState()
        // const [userProfileImage, setUserProfileImage] = useState()
        // const [userdisplayName, setUserdisplayName] = useState()
        // const [userfavoriteSubject, setUserfavoriteSubject] = useState()
        // const [userUniversity, setUserUniversity] = useState()
        // const [userStatus, setUserStatus] = useState()

        // // Teachers and Students are stored in the same collection
        // const docRef = firebase.firestore().collection(firebase.auth().currentUser.displayName).doc('users')
        //     .collection('allUsers').doc(firebase.auth().currentUser.uid)
        // docRef.get().then(function (doc) {

        //     //get current user info from firebase and
        //     //set states equal to respective field in database
        //     setuserEmail(doc.data().email)
        //     setUserProfileImage(doc.data().profileImageUrl)
        //     setUserdisplayName(doc.data().displayName)
        //     setUserfavoriteSubject(doc.data().favoriteSubject)
        //     setUserUniversity(doc.data().University)
        //     setUserStatus(doc.data().userStaus)

        // }).catch(function (error) {
        //     console.log(error);
        //     console.log(error.message);
        // });
        // return [userEmail, userdisplayName, userProfileImage, userfavoriteSubject, userUniversity, userStatus]
        // console.log(firebase.auth().currentUser.displayName);
        
    }
    return(
        <React.Fragment>
            
            <BrowserRouter>
            <Switch>
                ResearchResults
                <Route exact path="/" component={Home} />
                <Route exact path="/researchOpportunity" component={AddResearchPost} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/SignIn" component={SignIn} />
                <Route exact path="/OpportunityInfo" component={OpportunityInfo} />
                <Route exact path="/SignInAnimation" component={SignInAnimation} />
                {/* <Route exact path="/ResearchBar" component={ResearchBar} /> */} 
            </Switch>
            </BrowserRouter>
            {GetuserInfo()}
        </React.Fragment>
        
    
    )
    
}
export default withRouter(App);
