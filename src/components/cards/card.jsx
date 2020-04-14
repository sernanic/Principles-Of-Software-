import React, { useState } from 'react'
import './card.css'
import Modal from 'react-modal';
import M from "materialize-css";

Modal.setAppElement('#root')
function Card(props) {
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    // Auto initialize all the things!
    M.AutoInit();
    return (
        <div style={{ alignContent: 'center' }}>
            {/* <!-- Modal Trigger --> */}
            <a class="waves-effect waves-light modal-trigger" href={'#'+props.position}>
                <div className="Card">
                    
                    <img  style={{height:'100%'}} src={props.image} height="150" width="150" />
                </div>

                <div className="Info">
                    <h3 className="offeredTitle">{props.position}</h3>
                    <p className="offeredCategory" style={{ marginTop: '-8px' }}>{props.category}</p>
                </div>
            </a>

            {/* <!-- Modal Structure --> */}
            <div id={props.position} class="modal" style={{borderBottomLeftRadius:'10px'}}>
                <div class="modal-content" style={{backgroundColor:'#252c41',padding:'0px'}}>


                    <img  src={props.image} />


                    <div className="descriptionRow">
                        <h4 style={{ marginLeft: '-10px' }}>{props.position}</h4>
                        <button onClick={() => setmodalIsOpen(false)}>x</button>
                    </div>
                    <h6>Description</h6>
                    
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>

        </div>
    )
}

export default Card