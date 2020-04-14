import React from 'react'

const CarouselItem = props =>{
    <div>
        <img src={props.imagUrl} />
        <p className="legend">
            {props.opportunityName} <br/>
            {props.categoryName}
        </p>
    </div>

}
export default CarouselItem