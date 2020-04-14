import React, { Component, useState } from 'react'
import './CardInfo.css'
// import Modal from 'react-modal';
import M from "materialize-css";
import firebase from '../../../firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
class CardInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false
        }
        this.GetViewCount = this.GetViewCount.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    componentDidMount() {
        M.AutoInit();
    }

<<<<<<< HEAD:src/components/card/CardInfo.jsx
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
=======
    // TO DO: Use install Bootstrap and
    //use BootStrap modal exit event listener
    //to update views
    GetViewCount = () => {
        
        var id = this.props.id
        const docRef = firebase.firestore().collection('fau').doc('posts')
            .collection('allResearchPost').doc(id)
        docRef.get().then(function (doc) {

            const docRef = firebase.firestore().collection('fau').doc('posts')
                .collection('allResearchPost').doc(id)
            const categoryRef = firebase.firestore().collection('fau').doc('posts')
                .collection(doc.data().category).doc(id)

            docRef.update({
                views: doc.data().views + 1
            })
            categoryRef.update({
                views: doc.data().views + 1
            })
            console.log(doc.data().views + 1);

        }).catch(function (error) {
            console.log(error);
            console.log(error.message);
        });
    }
    handleClose = () =>{
        this.setState({show: false});
        this.GetViewCount()
    } 
    handleShow = () => this.setState({show: true});

    // Auto initialize all the things!
    render() {

        return (
            <div style={{ alignContent: 'center' }}>
                {/* <!-- Modal Trigger --> */}
                
                   
                <div className="RecentCard waves-effect waves-light" style={{ width: '300px' }} onClick={this.handleShow}>
                    <img style={{ height: '100%' }} src={this.props.imageUrl} />
                </div>

                <div className="Info">
                    <h3 className="offeredTitle">{this.props.opportunityName}</h3>
                    <p className="offeredCategory" style={{ marginTop: '-8px' }}>{this.props.categoryName}</p>
>>>>>>> upstream/master:src/components/RecentOpportunities/card/CardInfo.jsx
                </div>
            
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.opportunityName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src={this.props.imageUrl} fluid style={{borderRadius:'15px'}}/>
                        <h3 style={{marginTop:'3%'}}>Description</h3>
                        <p>
                        {this.props.description}
                        </p>
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

export default CardInfo