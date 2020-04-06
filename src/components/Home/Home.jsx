import React from 'react'
import HorizontalScroll from '../horizontalScroller/HorizontalScroll'
import VerticalScroll from '../VerticalScroll/VerticalScroll'
import AddResearchPost from '../AddOpportunity/AddResearchPost'
import Drawer from "../Drawer/Drawer"
import PostList from '../List/PostList'
import './Home.css'

const Home = () => {
    return (
        <div className="mainView" style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
            <div style={{width:'300px',height:'100vh'}}>
            <Drawer />
            </div>
            <div className="InfoContainer">
                <h1 style={{ paddingLeft: '40px' }}>hello</h1>
                <VerticalScroll />
                <HorizontalScroll />
            </div>

        </div>
    )
}

export default Home;