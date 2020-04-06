import React from 'react'
import { auth } from '../firebase/index'
import HorizontalScroll from './HorizontalScroll'
import AddResearchPost from './AddResearchPost'


const Home = () => {
    return (
        <div>
            <button onClick={() => auth.signOut()}>Sign Out</button>
            <HorizontalScroll />
            <br />
            <HorizontalScroll />
            <AddResearchPost />

        </div>
    )
}

export default Home;