import React, { useState, useEffect } from 'react'
import firebase,{auth} from '../../firebase/index'
import styled from 'styled-components'
import Card from '../cards/card'
import './HorizontalScroll.css'
import PostList from '../List/PostList'





const HorizontalScroll = () => {

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
            .collection('teachers').doc(firebase.auth().currentUser.uid)
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

        return [userEmail, userdisplayName, userProfileImage,userfavoriteSubject,userUniversity]

    }

    


    function UserPost() 
    {
        const userInfo = GetuserInfo()
        const favoriteSubject = userInfo[3]
        console.log(auth.currentUser.photoURL);
        
        const [posts, setPosts] = useState([])
        useEffect(() => {
            const unsubscribe = firebase.firestore().collection("fau").doc("fauInfo").collection(auth.currentUser.photoURL)
                .orderBy('datePosted', 'desc').limit(100)
                .onSnapshot((snapshot) => {
                    const newPost = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    const favoriteSubjecctPost = newPost.filter((item) => {
                        return item.category != 'Biology';
                    })
                    setPosts(favoriteSubjecctPost)
                })
            return () => unsubscribe()
        }, [])
        return posts
    }

    const posts = UserPost()
    return (


        <div className="HorizontalView">

            {posts.map((post) =>
                <Card key={post.id}
                    position={post.position}
                    category={post.category}
                    image={post.imageUrl}
                    description={post.description}
                    proffessorName={post.proffessorName} />
            )}

        </div>
    )
}

export default HorizontalScroll

