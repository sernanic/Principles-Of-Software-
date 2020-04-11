import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import styled from 'styled-components'
import './RecentPaper.css'
import Arrow from '../card/Arrows'
import ImageSlide from '../card/ImageSlide'

class Carousel {
    constructor(props) {
        this.state = {
            currentImageIndex: 0,
            image: null,
            url: '',
            title: '',
            description: '',
            profName: '',
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }
    previousSlide() {
        const lastIndex = this.state.imageUrl.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = this.state.imageUrl.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }

    GetuserInfo = () => {

        try {
            const docRef = firebase.firestore().collection("fau").doc("researchPapers").collection("AllResearchPapers").doc(this.state.title)
            docRef.get().then(function (doc) {

                // gets user email
                const title = doc.data().title
                this.setState(() => ({ title }));

                // gets user profileImageUrl
                const imageUrl = doc.data().imageUrl
                this.setState(() => ({ imageUrl }));

                // gets user displayName
                const description = doc.data().description
                this.setState(() => ({ description }));

            }).catch(function (error) {
                console.log("Error getting cached document:", error);

            });

        }
        catch (err) {
            console.log(err.message);

        }
    }
    render() {
        return (
            <div className="carousel">
                <Arrow
                    direction="left"
                    clickFunction={this.previousSlide}
                    glyph="&#9664;" />

                <ImageSlide url={this.state.imageUrl} />

                <Arrow
                    direction="right"
                    clickFunction={this.nextSlide}
                    glyph="&#9654;" />
            </div>
        );
    }
}
export default Carousel 