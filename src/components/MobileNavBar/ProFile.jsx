import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase/index'
import firebase from '../../firebase'


// returns array of [email, displayName, profileImageUrl]
const ProFile = props => {
    // When using states and functions 
    //the function name must start with a capital letter
    function GetuserInfo() {
        const [userEmail, setuserEmail] = useState()
        const [userProfileImage, setUserProfileImage] = useState()
        const [userdisplayName, setUserdisplayName] = useState()

        const docRef = firebase.firestore().collection(auth.currentUser.displayName).doc('users').collection('allUsers')
            .doc(firebase.auth().currentUser.uid)
        docRef.get().then(function (doc) {
            setuserEmail(doc.data().email)
            setUserProfileImage(doc.data().profileImageUrl)
            setUserdisplayName(doc.data().displayName)

        }).catch(function (error) {
            console.log("Error getting cached document:", error);

        });


        return [userEmail, userdisplayName, userProfileImage]

    }


    const userInfo = GetuserInfo()
    return (

        <div >

            <ul>

                {/* Profile Info */}
                <div>
                    <li style={{alignSelf:'center'}}><img style={{marginLeft:'37%'}} src={userInfo[2]} alt="" height="100" width="100" className="profileImage" /></li>
                    <li style={{width:'100%',textAlign:'center'}}><b style={{ marginLeft: "30px", textDecoration: "none", color: "#1B274A", fontWeight: "600", zIndex: '100' }}>{userInfo[1]}</b></li>
                    <li style={{width:'100%',textAlign:'center'}}><font size="2" style={{ marginLeft: "28px", textDecoration: "none", color: "#9FA3AF", zIndex: '100' }}>{userInfo[0]}</font></li>
                </div>
            </ul>

        </div>

    )

}



export default ProFile;

