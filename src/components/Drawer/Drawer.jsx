import React from 'react';
import { Link } from 'react-router-dom';
import "./Drawer.css";


class Drawer extends React.Component {
    render() {
        return (
            <div className="mainDrawer">
                <ul>
                    <li><Link to="/" style={{textDecoration:"none", color:"white"}} activeClassName="selected">Home</Link></li>
                    <li><Link to="researchOpportunity" style={{textDecoration:"none", color:"white"}} activeClassName="selected">Add research Opportunity</Link></li>
                </ul>
            </div>
        );
    }
}

export default Drawer;

