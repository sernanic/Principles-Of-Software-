import React, { useState, useEffect } from 'react'
import firebase from '../../../firebase/index'
import '../../horizontalScroller/HorizontalScroll.css'
import CardInfo from '../../card/CardInfo'

const SORT_OPTIONS = {
    "POST_ASC": { column: "datePosted", direction: "asc" },
    "POST_DESC": { column: "datePosted", direction: "desc" },
}

function UserPost(sortBy = "POST_DESC") {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        console.log(firebase.auth().currentUser.displayName);
<<<<<<< HEAD

        const unsubscribe = firebase.firestore().collection(firebase.auth().currentUser.displayName).doc("posts").collection("allResearchPost")
            .onSnapshot((snapshot) => {
                const newPost = snapshot.docs.map((doc) =>
                    ({
                        id: doc.id,
                        ...doc.data()
                    }))
=======
        
        const unsubscribe = firebase.firestore().collection(firebase.auth().currentUser.displayName)
        .doc("posts").collection("allResearchPost").orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
            .onSnapshot((snapshot) => 
            {
                const newPost = snapshot.docs.map((doc) => 
                ({
                    id: doc.id,
                    ...doc.data()
                }))
>>>>>>> upstream/master
                setPosts(newPost)
            })
        return () => unsubscribe()
    }, [sortBy])
    return posts
}

const RecentOpportunities = () => {
    const [sortBy, setSortBy] = useState()
    const posts = UserPost(sortBy)
    return (
<<<<<<< HEAD
        <div className="HorizontalView">
            {posts.map((post) =>
                <CardInfo
                    uid={post.uid}
=======
            <div className="HorizontalView">
                {posts.map((post) =>
                    <CardInfo
                    id={post.id}
>>>>>>> upstream/master
                    imageUrl={post.imageUrl}
                    opportunityName={post.position}
                    categoryName={post.category}
                    description={post.description}
                    proffessorName={post.proffessorName}
<<<<<<< HEAD
                    datePosted={post.datePosted}
                />
            )}
        </div>
=======
                    datePosted = {post.datePosted}
                    views={post.views}
                    /> 
                )}
            </div>
>>>>>>> upstream/master
    )
}

export default RecentOpportunities

