import React from 'react'
import HorizontalScroll from '../HorizontalScroll'
import AddResearchPost from '../AddResearchPost'
import './Home.css'

const Home = () => {
    return (
        <div className="mainView">
            
            <HorizontalScroll />
            <br />
            
            <AddResearchPost />

        </div>
    )
}

export default Home;