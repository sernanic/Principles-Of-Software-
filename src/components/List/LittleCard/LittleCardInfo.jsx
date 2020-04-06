import React from 'react'
import './LittleCard.css'
import LittleCardImage from './LittleCardImg'
const LittleCardInfo = props => (
    <div className="LittleCard" style={{height:'200px'}}>
        
            <div className="CategoryAndName" style={{flex:1,flexDirection:'row',justifyContent:'spaceBetween'}}>
            <LittleCardImage image={props.imageUrl} />
                <p style={{ width: '130px', textAlign: 'center' }}>{props.opportunityName}</p>
                <p style={{ width: '130px', textAlign: 'center' }}>{props.categoryName}</p>
                <p>{props.datePosted}</p>
            </div>
           
        </div>

    
)


export default LittleCardInfo