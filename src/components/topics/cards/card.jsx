import React, { useState, Component } from 'react'
import './card.css'
import M from "materialize-css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MoreInfoPage from '../MoreInfoPage/MoreInfoPage'

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.MoreInfoPage = this.MoreInfoPage.bind(this);
    }


    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div style={{ alignContent: 'center' }}>

                <div className="Card waves-effect waves-light" >
                    <img style={{ height: '100%' }} src={this.props.imageUrl} height="100" width="100" />
                </div>
                <div className="Info">
                    <p className="offeredCategory" style={{ marginTop: '-8px' }}>{this.props.categoryName}</p>
                </div>
            </div>
        )
    }

}

export default Card