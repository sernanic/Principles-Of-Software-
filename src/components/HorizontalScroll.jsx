import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import styled from 'styled-components'
import Card from './cards/card'

const SORT_OPTIONS = {
    "POST_ASC": { column: "datePosted", direction: "asc" },
    "POST_DESC": { column: "datePosted", direction: "desc" },
}

function UserPost(sortBy = "POST_ASC") {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("fau").doc("fauInfo").collection("allResearchPost")
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
    const [sortBy, setSortBy] = useState("POST_ASC")
    const posts = UserPost(sortBy)
    return (
        <HorizontalView>
            {posts.map((post) =>

                <Card key = {post.id}
                position = {post.position}
                category = {post.category}
                image={post.imageUrl}/>
            )}

        </HorizontalView>
    )
}

export default HorizontalScroll

const HorizontalView = styled.div`
display: flex;
flex-wrap: nowrap;
overflow-x: auto;
padding:20px 20px 20px 20px;
height:300px

`;

const HorizontalLink = styled.a`
    color: white;
    text-align: center;
    padding: 14px;
    text-decoration: none;
    
`;