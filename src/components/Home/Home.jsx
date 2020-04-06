import React from 'react'
import HorizontalScroll from '../HorizontalScroll'
import AddResearchPost from '../AddOpportunity/AddResearchPost'
import Drawer from "../Drawer/Drawer"
import './Home.css'

const Home = () => {
    return (
        <div className="mainView">
            <Drawer/>
            <HorizontalScroll />
            <br />
            
        </div>
    )
}

export default Home;