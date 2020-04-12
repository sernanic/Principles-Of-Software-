import React, { useState, useEffect, Component } from 'react'
import firebase from '../../firebase'
import styled from 'styled-components'
import './RecentPaper.css'
import Arrow from './card/Arrows'
import ImageSlide from './card/ImageSlide'

const Carousel = props => {
    /* super(props)
    constructor(props) {
        this.state = {
            currentImageIndex: 0,
            image: null,
            url: '',
            title: '',
            description: '',
            profName: '',
            datePosted: ''
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    } */

    function previousSlide() {
        const lastIndex = this.state.imageUrl.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    function nextSlide() {
        const lastIndex = this.state.imageUrl.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    function GetInfo() {
        const [userEmail, setuserEmail] = useState()
        const [userProfileImage, setUserProfileImage] = useState()
        const [userdisplayName, setUserdisplayName] = useState()
        const [userfavoriteSubject, setUserfavoriteSubject] = useState()
        const [userUniversity, setUserUniversity] = useState()

        const docRef = firebase.firestore().collection('fau').doc('researchPapers')
            .collection('AllResearchPapers').doc(title)
        docRef.get().then(function (doc) {
            // Document was found in the cache. If no cached document exists,
            setuserEmail(doc.data().email)
            setUserProfileImage(doc.data().profileImageUrl)
            setUserdisplayName(doc.data().displayName)
            setUserfavoriteSubject(doc.data().favoriteSubject)
            setUserUniversity(doc.data().University)
        }).catch(function (error) {
            console.log("Error getting cached document:", error);
        });

        return [userEmail, userdisplayName, userProfileImage, favoriteSubject, userfavoriteSubject, userUniversity]

    }

    const userInfo = GetInfo()

    return (
        <div className="carousel">
            <Arrow
                direction="left"
                clickFunction={previousSlide()}
                glyph="&#9664;" />

            <ImageSlide url={imageUrl} />

            <Arrow
                direction="right"
                clickFunction={nextSlide()}
                glyph="&#9654;" />
        </div>
    );
}
export default Carousel 