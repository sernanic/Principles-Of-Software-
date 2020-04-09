import React from 'react'
import './LittleCard.css'

const LittleCardImage = props => (
        <div className="LittleCardImg">
                <img src={props.image}  />
        </div>
)

export default LittleCardImage