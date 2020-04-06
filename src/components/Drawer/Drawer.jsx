import React from 'react';
import { Link } from 'react-router-dom';
import "./Drawer.css";


class Drawer extends React.Component {
    render() {
        return (
            <div className="mainDrawer">
                <div class="bg-image"></div>
                <div class="bg-text">
                    <ul>
                        <li><Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: "600" }} activeClassName="selected">Home</Link></li>
                        <li><Link to="researchOpportunity" style={{ textDecoration: "none", color: "black", fontWeight: "600" }} activeClassName="selected">Add research Opportunity</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Drawer;

