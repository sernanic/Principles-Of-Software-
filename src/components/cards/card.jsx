import React from 'react'
import './card.css'

const Card = props=>(
    <div className="Card">
        <div className="positionImage">
            <img src={props.image} height="150" width="150"/>
        </div>
        <div className ="Info">
            <h3>{props.position}</h3>
            <p>{props.category}</p>
        </div>
    </div>
)

export default Card