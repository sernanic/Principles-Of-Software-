import React from 'react'
import './card.css'

const Card = props => (
    <div style={{alignContent:'center'}}>
        <div className="Card">
            <div className="positionImage">
                <img src={props.image} height="150" width="150" />
            </div>

        </div>
        <div className="Info">
            <h3 className="offeredTitle">{props.position}</h3>
            <p className="offeredCategory" style={{marginTop:'-8px'}}>{props.category}</p>
        </div>
    </div>

)

export default Card