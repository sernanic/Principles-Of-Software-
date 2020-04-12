import React, { useState,Component } from 'react'
import './CardInfo.css'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import M from "materialize-css";
import OpportunityInfo from '../../OpportunityInfo/OpportunityInfo'
Modal.setAppElement('#root')
class CardInfo extends Component
{
    constructor(props) {
        super(props);

    }
    


    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render(){
        return (
            <div style={{ alignContent: 'center' }}>
                {/* <!-- Modal Trigger --> */}
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
    
                {/* <!-- Modal Structure --> */}
                <div id={this.props.opportunityName} class="modal" style={{ borderBottomLeftRadius: '10px' }}>
                    <div class="modal-content" style={{ backgroundColor: '#252c41', padding: '0px' }}>
    
                        <div className="modalImage">
                            <img src={this.props.imageUrl} className="modalImage" />
                        </div>
    
                        <div className="descriptionRow">
                            <h4 style={{ marginLeft: '-10px' }}>{this.props.opportunityName}</h4>
                        </div>
                        <h6>Description</h6>
                        <p>{this.props.description}</p>
                        <p>{this.props.proffessorName}</p>
                        <p>Date propsed {this.props.datepropsed}</p>
    
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
    
            </div>
        )

    }
   
}

export default CardInfo