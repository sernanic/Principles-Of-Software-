import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import styled from 'styled-components'
import Card from '../cards/card'
import './VerticalScroll.css'
import LittleCardInfo from '../List/LittleCard/LittleCardInfo'

const SORT_OPTIONS = {
    "POST_ASC": { column: "datePosted", direction: "asc" },
    "POST_DESC": { column: "datePosted", direction: "desc" },
}

function UserPost(sortBy = "POST_DESC") {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("fau").doc("fauInfo").collection("allResearchPost")
            .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction).limit(15)
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
            <div className="VerticallView">
                {posts.map((post) =>
                    <LittleCardInfo
                    imageUrl={post.imageUrl}
                    opportunityName={post.position}
                    categoryName={post.category}
                    datePosted={post.datePosted} /> 
                )}
            </div>
    )
}

export default HorizontalScroll

