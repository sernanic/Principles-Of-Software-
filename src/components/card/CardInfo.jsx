import React, { useState } from 'react'
import './CardInfo.css'
import Modal from 'react-modal';
import M from "materialize-css";

Modal.setAppElement('#root')
function CardInfo(props) {
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    // Auto initialize all the things!
    M.AutoInit();
    return (
        <div style={{ alignContent: 'center' }}>
            {/* <!-- Modal Trigger --> */}
            <a class="waves-effect waves-light modal-trigger" href={'#' + props.opportunityName}>
                <div className="RecentCard" style={{ width: '300px' }}>

                    <img style={{ height: '100%' }} src={props.imageUrl} />
                </div>

                <div className="Info">
                    <h3 className="offeredTitle">{props.opportunityName}</h3>
                    <p className="offeredCategory" style={{ marginTop: '-8px' }}>{props.categoryName}</p>
                    <p>{props.uid}</p>
                </div>
            </a>

            {/* <!-- Modal Structure --> */}
            <div id={props.opportunityName} class="modal" style={{ borderBottomLeftRadius: '10px' }}>
                <div class="modal-content" style={{ backgroundColor: '#252c41', padding: '0px' }}>

                    <img src={props.imageUrl} />
                    <div className="descriptionRow">
                        <h4 style={{ marginLeft: '-10px' }}>{props.opportunityName}</h4>
                    </div>
                    <h6>Description</h6>
                    <p>{props.description}</p>
                    <p>{props.proffessorName}</p>
                    <p>Date Posted {props.datePosted}</p>

                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>

        </div>
    )
}

export default CardInfo