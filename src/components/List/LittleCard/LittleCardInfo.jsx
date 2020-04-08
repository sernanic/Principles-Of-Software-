import React from 'react'
import './LittleCard.css'
import LittleCardImage from './LittleCardImg'
const LittleCardInfo = props => (
    
            <div className="LittleCard">
                <LittleCardImage image={props.imageUrl} />
                <p style={{ width: '130px', textAlign: 'center',textTransform:'capitalize' }}>{props.opportunityName}</p>
                <p style={{ width: '130px', height: '30px',textAlign: 'center',color:"#BDBDBD"}}>{props.categoryName}</p>
                <p style={{paddingRight:'10px',color:"#BDBDBD"}}>{props.datePosted}</p>
            </div>
           
)


export default LittleCardInfo