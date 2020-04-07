import React, { useState, useEffect } from 'react'
import firebase from '../../firebase/index'
import styled from 'styled-components'
import Card from '../cards/card'
import './HorizontalScroll.css'
import PostList from '../List/PostList'

const SORT_OPTIONS = {
    "POST_ASC": { column: "datePosted", direction: "asc" },
    "POST_DESC": { column: "datePosted", direction: "desc" },
}

function UserPost(sortBy = "POST_ASC") {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("fau").doc("fauInfo").collection("Biology")
            .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
            .onSnapshot((snapshot) => {
                const newPost = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setPosts(newPost)
            })

        return () => unsubscribe()
    }, [sortBy])
    return posts
}


const HorizontalScroll = () => {
    const [sortBy, setSortBy] = useState("POST_DESC")
    const posts = UserPost(sortBy)
    return (

        
            <div className="HorizontalView">

                {posts.map((post) =>
                    <Card key={post.id}
                        position={post.position}
                        category={post.category}
                        image={post.imageUrl} 
                        description={post.description}
                        proffessorName={post.proffessorName}/>
                )}
                <h1>hello</h1>

            </div>
        
 

    )
}

export default HorizontalScroll

