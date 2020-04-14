import React, { useState, useEffect } from 'react'
import firebase, { auth } from '../../firebase/index'
import Card from '../cards/card'
import './HorizontalScroll.css'

const HorizontalScroll = () => {

    // returns array of [email, displayName, profileImageUrl]
    // When using states and functions 
    //the function name must start with a capital letter

    function UserPost() {

        console.log(auth.currentUser.photoURL);

        const [posts, setPosts] = useState([])
        useEffect((newInfo) => {
            // const userInfo = GetuserInfo()
            const unsubscribe = firebase.firestore().collection(firebase.auth().currentUser.displayName).doc("posts").collection(auth.currentUser.photoURL)
                .onSnapshot((snapshot) => {
                    const newPost = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setPosts(newPost)
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
                imageUrl={post.imageUrl}
                opportunityName={post.position}
                categoryName={post.category}
                description={post.description}
                professorName={post.professorName}
                datePosted = {post.datePosted} />
            )}
            <Card/>

        </div>
    )
}

export default HorizontalScroll
