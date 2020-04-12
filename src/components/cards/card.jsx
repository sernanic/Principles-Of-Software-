import React, { useState, Component } from 'react'
import './card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    render() {
        return (
            <div style={{ alignContent: 'center' }}>
                {/* <!-- Modal Trigger --> */}

                <div className="Card waves-effect waves-light" onClick={this.handleShow}>

                    <img style={{ height: '100%' }} src={this.props.imageUrl} height="150" width="150" />
                </div>

                <div className="Info">
                    <h3 className="offeredTitle">{this.props.opportunityName}</h3>
                    <p className="offeredCategory" style={{ marginTop: '-8px' }}>{this.props.categoryName}</p>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.opportunityName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src={this.props.imageUrl} fluid style={{ borderRadius: '15px' }} />
                        <h3 style={{ marginTop: '3%' }}>Description</h3>
                        <p>
                            {this.props.description}
                        </p>
                        <p>{this.props.professorName}</p>
                        <p>Date Posted {this.props.datePosted}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }

}

export default Card