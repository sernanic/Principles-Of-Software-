import React from 'react'
import './LittleCard.css'

const LittleCardImage = props => (
        <div className="LittleCardImg">
            
                <img src={props.image} height="50" width="50" />
            

        </div>
)

export default LittleCardImage