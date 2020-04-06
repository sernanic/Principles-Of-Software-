import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import LittleCardInfo from './LittleCard/LittleCardInfo'
import './PostList.css'

const SORT_OPTIONS = {
    "POST_ASC": { column: "datePosted", direction: "asc" },
    "POST_DESC": { column: "datePosted", direction: "desc" },
}

function UserPost(sortBy = "POST_DESC") {
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



const PostList = () => {
    const [sortBy, setSortBy] = useState("POST_DESC")
    const posts = UserPost(sortBy)
    return (
        <div classContainer>
            <h2>Post List</h2>
            <div>
                <label>Sort by</label>
                <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                    <option value="POST_DESC">Newest Posts</option>
                    <option value="POST_ASC">Oldest Posts</option>
                </select>
            </div>
            <div className="verticalScroll">
                <ol>
                    {posts.map((post) =>

                        <li key={post.id}>
                            <LittleCardInfo
                                imageUrl={post.imageUrl}
                                opportunityName={post.position}
                                categoryName={post.category}
                                datePosted={post.datePosted} />

                        </li>
                    )}
                </ol>
            </div>

        </div>
    )
}

export default PostList