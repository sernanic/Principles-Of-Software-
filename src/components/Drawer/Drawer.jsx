import React from 'react';
import { Link } from 'react-router-dom';
import "./Drawer.css";


class Drawer extends React.Component {
    render() {
        return (
            <div className="mainDrawer">
                {/* <div class="bg-image"></div> */}
                <div className="bg-text">
                    <ul>
                        <li><Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: "600",zIndex:'100' }}>Home</Link></li>
                        <li><Link to="researchOpportunity" style={{ textDecoration: "none", color: "black", fontWeight: "600",zIndex:'100' }} >Add research Opportunity</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Drawer;

