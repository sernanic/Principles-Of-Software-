import React, { useState, useEffect, Component } from 'react'
import firebase from '../../firebase'
import styled from 'styled-components'
import './Carousel.css'
import Arrow from './card/Arrows'
import ImageSlide from './card/ImageSlide'

const Carousel = props => {
    function previousSlide() {
        const image = posts.imageUrl;
        const lastIndex = image.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    function nextSlide() {
        const image = posts.imageUrl;
        const lastIndex = image.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    function UserPost(sortBy = "POST_DESC") {
        const [posts, setPosts] = useState([])

        useEffect(() => {

            const unsubscribe = firebase.firestore().collection("fau").doc("fauInfo").collection("AllResearchPost")
                .orderBy('datePosted', 'desc').limit(6)
                .onSnapshot((snapshot) => {
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

    const [sortBy, setSortBy] = useState("POST_DESC")
    const posts = UserPost(sortBy)
    return (
        <div className="carousel">
            <Arrow
                direction="left"
                clickFunction={previousSlide()}
                glyph="&#9664;" />

            <ImageSlide url={posts[currentImageIndex].imageUrl} />

            <Arrow
                direction="right"
                clickFunction={nextSlide()}
                glyph="&#9654;" />
        </div>
    );
}
export default Carousel 