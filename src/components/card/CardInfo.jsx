import React from 'react'
import './CardInfo.css'
import CardImg from './CardImage'
const CardInfo = props => (
    /*<div className="CardInfo" >
        <CardImg image={props.imageUrl} />
        <p style={{ width: '130px', textAlign: 'center', textTransform: 'capitalize' }}>{props.title}</p>
        <p style={{ width: '130px', height: '30px', textAlign: 'center', color: "#BDBDBD" }}>{props.categoryName}</p>
        <p style={{ paddingRight: '10px', color: "#BDBDBD" }}>{props.datePosted}</p>
    </div >*/
    <div className="Info">
        <CardImg image={props.imageUrl} />
        <h3 className="offeredTitle">{props.title}</h3>
        <p className="offeredCategory" style={{ marginTop: '-8px' }}>{props.description}</p>
        <button >Prev</button>
        <button >Next</button>>
    </div>

)

export default CardInfo