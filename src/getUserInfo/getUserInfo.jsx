// Code Under Development 

//This code fill allow developers to export user info 
//into any other components

// import React, { useState, useEffect,Component } from 'react'
// import firebase from '../firebase/index'
// import auth from '../firebase/index'


// class SignUp extends Component 
// {
//     constructor(props) 
//     {
//         super(props);
//         this.state = {
//             userEmail: '',
//             userProfileImage: '',
//             userdisplayName: '',
//             userfavoriteSubject: '',
//             userUniversity: ''
//         }

//         this.GetuserInfo = this.GetuserInfo.bind(this);
//     }
//     export GetuserInfo(){

//         const [userEmail, setuserEmail] = useState()
//         const [userProfileImage, setUserProfileImage] = useState()
//         const [userdisplayName, setUserdisplayName] = useState()
//         const [userfavoriteSubject, setUserfavoriteSubject] = useState()
//         const [userUniversity, setUserUniversity] = useState()
//         const docRef = firebase.firestore().collection(auth.currentUser.displayName).doc('users')
//             .collection('teachers').doc(auth.currentUser.uid)
//         docRef.get().then(function (doc) {

//             // Document was found in the cache. If no cached document exists,
//             const userEmail = doc.data().email
//             this.setState(() => ({ userEmail }));

//             const profileImageUrl = doc.data().profileImageUrl
//             this.setState(() => ({ profileImageUrl }));

//             const displayName = doc.data().displayName
//             this.setState(() => ({ displayName }));

//             const favoriteSubject = doc.data().favoriteSubject
//             this.setState(() => ({ favoriteSubject }));

//             const University = doc.data().University
//             this.setState(() => ({ University }));


//         }).catch(function (error) {
//             console.log("Error getting cached document:", error);
//         });

//         return [userEmail, userdisplayName, userProfileImage, favoriteSubject, University]
//     }

// }





// const userInfo = SignUp.GetuserInfo()
// const userEmail = userInfo[0]
// const userdisplayName = userInfo[1]
// const userProfileImage = userInfo[2]
// const favoriteSubject = userInfo[3]
// const University = userInfo[4]
// export {
//     userEmail, userdisplayName, userProfileImage, favoriteSubject, University as default
// }