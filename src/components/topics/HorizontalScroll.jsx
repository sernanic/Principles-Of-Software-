import React, { useState, useEffect } from 'react'
import firebase, { auth } from '../../firebase/index'
import Card from './cards/card'
import './HorizontalScroll.css'





const HorizontalScroll = prop s=> {

    // returns array of [email, displayName, profileImageUrl]
    // When using states and functions 
    //the function name must start with a capital letter

    // const SORT_OPTIONS = {
    //     "POST_ASC": { column: "datePosted", direction: "asc" },
    //     "POST_DESC": { column: "datePosted", direction: "desc" },
    // }

    // function UserPost(sortBy = "POST_DESC") {
    //     const [posts, setPosts] = useState([])

    //     useEffect(() => {

    //         console.log(firebase.auth().currentUser.displayName);

    //         const unsubscribe = firebase.firestore().collection(firebase.auth().currentUser.displayName)
    //             .doc("SchoolTopics").where("category", "==", true)
    //             .onSnapshot((snapshot) => {
    //                 const newPost = snapshot.docs.map((doc) =>
    //                     ({
    //                         id: doc.id,
    //                         ...doc.data()
    //                     }))
    //                 setPosts(newPost)
    //             })
    //         return () => unsubscribe()
    //     }, [sortBy])
    //     return posts
    // }

    // const posts = UserPost()
    return (


        <div className="HorizontalView">
            <Card key={post.id}
                imageUrl={post.imageUrl}
                categoryName='Computer Science'/>
            <Card key={post.id}
                imageUrl={post.imageUrl}
                categoryName='Biology' />
            <Card key={post.id}
                imageUrl={post.imageUrl}
                categoryName='Medicine' />
            <Card key={post.id}
                imageUrl={post.imageUrl}
                categoryName='Engineering' />
            <Card key={post.id}
                imageUrl={post.imageUrl}
                categoryName='Math' />
            <Card key={post.id}
                imageUrl={post.imageUrl}
                categoryName='Phsyics' />
            <Card key={post.id}
                imageUrl={post.imageUrl}
                categoryName='Social Science'/>
            <Card key={post.id}
                imageUrl={post.imageUrl}
                categoryName='Arts and Letters' />
        </div>
    )
}

export default HorizontalScroll
