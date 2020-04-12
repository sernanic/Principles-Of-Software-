import React, { Component, useState } from 'react'
import './CardInfo.css'
import Modal from 'react-modal';
import M from "materialize-css";
import firebase from '../../../firebase'
Modal.setAppElement('#root')
class CardInfo extends Component {
    constructor(props) {
        super(props);
        this.GetViewCount = this.GetViewCount.bind(this);
    }
    componentDidMount() {
        M.AutoInit();
    }
    
    // TO DO: Use install Bootstrap and
    //use BootStrap modal exit event listener
    //to update views
    GetViewCount = () => {
        console.log();
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
                views: doc.data().category
            })

        }).catch(function (error) {
            console.log(error);
            console.log(error.message);
        });
    }


    // Auto initialize all the things!
    render() {

        return (
            <div style={{ alignContent: 'center' }}>
                {/* <!-- Modal Trigger --> */}
                <div >
                    <a class="waves-effect waves-light modal-trigger" href={'#' + this.props.opportunityName}>
                        <div className="RecentCard" style={{ width: '300px' }}>

                            <img style={{ height: '100%' }} src={this.props.imageUrl} />
                        </div>

                        <div className="Info">
                            <h3 className="offeredTitle">{this.props.opportunityName}</h3>
                            <p className="offeredCategory" style={{ marginTop: '-8px' }}>{this.props.categoryName}</p>
                            <p>{this.props.uid}</p>
                        </div>
                    </a>
                </div>

                {/* <!-- Modal Structure --> */}
                {/* onMouseMove={GetViewCount} */}
                <div id={this.props.opportunityName} class="modal" style={{ borderBottomLeftRadius: '10px', zIndex: '20000' }} >
                    <div class="modal-content" style={{ backgroundColor: '#252c41', padding: '0px' }}>
                        <div className="modalImage" >
                            <img src={this.props.imageUrl} className="modalImage" />
                        </div>

                        <div className="descriptionRow">
                            <h4 style={{ marginLeft: '-10px' }}>{this.props.opportunityName}</h4>
                        </div>
                        <h6>Description</h6>
                        <p>{this.props.description}</p>
                        <p>{this.props.proffessorName}</p>
                        <p>Date posted {this.props.datePosted}</p>

                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat" onClick={this.GetViewCount}>Agree</a>
                    </div>
                </div>

            </div>
        )
    }



}

export default CardInfo