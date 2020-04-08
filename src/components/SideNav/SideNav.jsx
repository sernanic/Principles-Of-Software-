import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./SideNav.css";
import { auth } from '../../firebase/index'
import firebase from '../../firebase'

import { UserConsumer } from '../../UserProvider'



const SideNav = props => {
    // When using states and functions 
    //the function name must start with a capital letter
    function Getusername(count) {
        const [userEmail, setuserEmail] = useState()
        const docRef = firebase.firestore().collection('fau').doc('users')
            .collection('teachers').doc(auth.currentUser.uid)
        docRef.get().then(function (doc) {
            // Document was found in the cache. If no cached document exists,
            setuserEmail(doc.data().email)
        }).catch(function (error) {
            console.log("Error getting cached document:", error);
        });

        return userEmail

    }
    const [count, setCount] = useState('hello from other worlds');



    const email = Getusername(count)
    return (
        <UserConsumer>
            {currentUser => {
                return (
                    <div className="mainDrawer">

                        <ul>
                            <li>{email}</li>
                            <li><Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>Home</Link></li>
                            <li><Link to="researchOpportunity" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }} >Add research Opportunity</Link></li>
                            <li><Link to="SignUp" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>Sign Up</Link></li>
                            <li><Link to="SignIn" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>Sign In</Link></li>
                        </ul>

                    </div>
                );
            }
            }
        </UserConsumer>
    )


}



export default SideNav;

