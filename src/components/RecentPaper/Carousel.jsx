import React, { useState, useEffect, Component } from 'react'
import firebase from '../../firebase'
import styled from 'styled-components'
import './Carousel.css'
import Arrow from './card/Arrows'
import ImageSlide from './card/ImageSlide'

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }
    previousSlide() {
        const image = this.state.url;
        const lastIndex = image.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const image = this.state.url;
        const lastIndex = image.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }
    render() {
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
        console.log("Hello")
        const posts = UserPost()
        return (
            < div className="carousel" >
                <Arrow
                    direction="left"
                    clickFunction={this.previousSlide}
                    glyph="&#9664;" />
                <ImageSlide />
                <Arrow
                    direction="right"
                    clickFunction={this.nextSlide}
                    glyph="&#9654;" />

            </div >
        );
    }
}
export default Carousel 