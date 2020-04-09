import React from 'react'
import './CardInfo.css'

const CardImg = props => (
    <div className="CardImage">
        <img src={props.image} height="400" width="400" />
    </div>
)

export default CardImg