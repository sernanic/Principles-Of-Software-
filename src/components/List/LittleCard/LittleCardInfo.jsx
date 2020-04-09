import React from 'react'
import './LittleCard.css'
import LittleCardImage from './LittleCardImg'
const LittleCardInfo = props => (
    
            <div className="LittleCard">
                <LittleCardImage image={props.imageUrl} />
                <p style={{ width: '130px', fontWeight:'600',textAlign: 'center',textTransform:'capitalize' }}>{props.opportunityName}</p>
                <p style={{ width: '130px', height: '15px',textAlign: 'center',color:"#9FA3AF"}}>{props.categoryName}</p>
                <p style={{paddingRight:'10px',color:"#9FA3AF"}}>{props.datePosted}</p>
            </div>
           
)


export default LittleCardInfo