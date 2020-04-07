import React from 'react'
import HorizontalScroll from '../horizontalScroller/HorizontalScroll'
import VerticalScroll from '../VerticalScroll/VerticalScroll'
import AddResearchPost from '../AddOpportunity/AddResearchPost'
import SideNav from "../SideNav/SideNav"
import auth from '../../firebase/index'
import './Home.css'

const Home = props => {

    return (

        <div className="mainView" style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
            <div style={{width:'300px',height:'100vh'}}>
            <SideNav />
            </div>
            <div className="InfoContainer">
                <h1 style={{ paddingLeft: '25px',color:'#f1404b',marginBottom: '4px' }}>Most Recent Opportunites</h1>
                <VerticalScroll />
                <h2 className="mainSubject">{props.mainSubject}</h2>
                <HorizontalScroll />
            </div>

        </div>
    )
}

export default Home;