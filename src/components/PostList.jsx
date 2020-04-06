import React, { useState, useEffect } from 'react'
import firebase from '../firebase'

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



const PostList = () => {
    const [sortBy, setSortBy] = useState("POST_ASC")
    const posts = UserPost(sortBy)
    return (
        <div>
            <h2>Post List</h2>
            <div>
                <label>Sort by</label>
                <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                    <option value="POST_ASC">Newest Posts</option>
                    <option value="POST_DESC">Oldest Posts</option>
                </select>
            </div>
            <ol>
                {posts.map((post) =>

                    <li key={post.id}>
                        <div className="post-entry">
                            {post.position}
                            <div>
                                <img src={post.imageUrl} height="300" width="400"/> 
                                <script>
                                    console.log(post.imageUrl);
                                    
                                </script>
                            </div>

                        </div>

                    </li>
                )}
            </ol>
        </div>
    )
}

export default PostList