import React, { useState, useEffect } from 'react'
import firebase from '../../firebase/index'

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    function UserPost() {

        console.log("Hello");

        const [posts, setPosts] = useState([])
        useEffect((newInfo) => {
            // const userInfo = GetuserInfo()
            const unsubscribe = firebase.firestore().collection("fau").doc("researchPapers").collection("AllResearchPapers")
                .onSnapshot((snapshot) => {
                    const newPost = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setPosts(newPost)
                })
            return () => unsubscribe()
        }, [])
        return posts
    }

    const posts = UserPost()
    return (
        <div className="image-slide" style={styles}></div>
    );
}
export default ImageSlide