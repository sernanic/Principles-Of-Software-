import React, { useState, useEffect } from 'react'
import SideNav from "../SideNav/SideNav"
import MobileNavBar from '../MobileNavBar/MobileNavBar'
import './OpportunityInfo.css'

const OpportunityInfo = props => {

 

    return (
        <div style={{ flex: 1, justifyContent: 'space-between', overflowX: 'hidden' }}>

            <div className="InfoContainer" >

                {/* <SearchBar /> */}
                <div className="OpportunityInfoContainer">
                    <img src={props.imageUrl} className="modalImage" />
                    <h4 style={{ marginLeft: '-10px' }}>{props.opportunityName}</h4>
                    <h6>Description</h6>
                    <p>{props.description}</p>
                    <p>{props.proffessorName}</p>
                    <p>Date Posted {props.datePosted}</p>
                </div>
            </div>

        </div>
    )
}

export default OpportunityInfo;