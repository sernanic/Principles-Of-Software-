import React, { useState, useEffect } from 'react'
import firebase from '../../../firebase/index'
import '../../horizontalScroller/HorizontalScroll.css'
import CardInfo from '../../card/CardInfo'

const SORT_OPTIONS = {
    "POST_ASC": { column: "datePosted", direction: "asc" },
    "POST_DESC": { column: "datePosted", direction: "desc" },
}

function UserPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        console.log(firebase.auth().currentUser.displayName);

        const unsubscribe = firebase.firestore().collection(firebase.auth().currentUser.displayName).doc("posts").collection("allResearchPost")
            .onSnapshot((snapshot) => {
                const newPost = snapshot.docs.map((doc) =>
                    ({
                        id: doc.id,
                        ...doc.data()
                    }))
                setPosts(newPost)
            })
        return () => unsubscribe()
    }, [])
    return posts
}

const RecentOpportunities = () => {
    const [sortBy, setSortBy] = useState()
    const posts = UserPost(sortBy)
    return (
        <div className="HorizontalView">
            {posts.map((post) =>
                <CardInfo
                    uid={post.uid}
                    imageUrl={post.imageUrl}
                    opportunityName={post.position}
                    categoryName={post.category}
                    description={post.description}
                    proffessorName={post.proffessorName}
                    datePosted={post.datePosted}
                />
            )}
        </div>
    )
}

export default RecentOpportunities

