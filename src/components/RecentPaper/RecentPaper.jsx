import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import styled from 'styled-components'
import './RecentPaper.css'
import CardInfo from '../card/CardInfo'



const SORT_OPTIONS = {
    "POST_ASC": { column: "datePosted", direction: "asc" },
    "POST_DESC": { column: "datePosted", direction: "desc" },
}

function UserPost(sortBy = "POST_DESC") {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection("fau").doc("researchPapers").collection("AllResearchPapers")
            .orderBy('datePosted', 'desc').limit(1)
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

const RecentPaper = () => {
    const [sortBy, setSortBy] = useState("POST_DESC")
    const posts = UserPost(sortBy)
    return (
        <div className="RecentPaper">
            {posts.map((post) =>
                <CardInfo
                    imageUrl={post.imageUrl}
                    title={post.title}
                    description={post.description}
                    datePosted={post.dataPosted} />
            )}
        </div>
    )
}

export default RecentPaper
