import React, { useState } from 'react'
import './card.css'
import Modal from 'react-modal';
import Wave from '../Wave'

Modal.setAppElement('#root')
function Card(props) {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    return (
        <div style={{ alignContent: 'center' }}>

            <div className="Card">
                <img src={props.image} height="150" width="150" onClick={() => setmodalIsOpen(true)} />
            </div>
            <div className="Info">
                <h3 className="offeredTitle">{props.position}</h3>
                <p className="offeredCategory" style={{ marginTop: '-8px' }}>{props.category}</p>
            </div>


            <Modal isOpen={modalIsOpen}

                onRequestClose={() => setmodalIsOpen(false)}
                style={{ content: { color: 'white', marginLeft: 300, border: 0, backgroundColor: 'none',width:'800px',height:'80%',marginLeft:'30%' } }}>
                <div className="mainContent">
                    <div className="contentImage">
                        <img src={props.image} height="400" width="400"/>
                    </div>
                    <div className="modalInfo">
                        <div className="descriptionRow">
                        <h2 style={{marginLeft:'-10px'}}>{props.position}</h2>
                        <button onClick={() => setmodalIsOpen(false)}>x</button>
                        </div>
                        <h3>Description</h3>
                        <p>{props.description}</p>
                    </div>

                </div>

            </Modal>
        </div>
    )
}

export default Card