import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import styled from 'styled-components'
import Card from '../../components/cards/card'
import '../List'
import '../horizontalScroller/HorizontalScroll.css'
import CardInfo from './CardInfo'

const SORT_OPTIONS = {
    "POST_ASC": { column: "datePosted", direction: "asc" },
    "POST_DESC": { column: "datePosted", direction: "desc" },
}

function UserPost(sortBy = "POST_DESC") {
    const [posts, setPosts] = useState([])
   
    useEffect(() => 
    {
        
        const unsubscribe = firebase.firestore().collection("fau").doc("fauInfo").collection("allResearchPost")
            .orderBy('datePosted', 'asc')
            .onSnapshot((snapshot) => 
            {
                const newPost = snapshot.docs.map((doc) => 
                ({
                    id: doc.id,
                    ...doc.data()
                }))
                setPosts(newPost)
            })
        return () => unsubscribe()
    }, [sortBy])
    return posts
}

const RecentOpportunities = () => {
    const [sortBy, setSortBy] = useState("POST_DESC")
    const posts = UserPost(sortBy)
    return (
            <div className="HorizontalView">
                {posts.map((post) =>
                    <CardInfo
                    imageUrl={post.imageUrl}
                    opportunityName={post.position}
                    categoryName={post.category}
                    description={post.description}
                    proffessorName={post.proffessorName}
                    datePosted = {post.datePosted}
                    /> 
                )}
            </div>
    )
}

export default RecentOpportunities

