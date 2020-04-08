import React from 'react';
import { Link } from 'react-router-dom';
import "./SideNav.css";


class SideNav extends React.Component {
    render() {
        return (
            <div className="mainDrawer">
                {/* <div class="bg-image"></div> */}
                <div className="bg-text">
                    <ul>
                        <li>hello</li>
                        <li><Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: "600",zIndex:'100' }}>Home</Link></li>
                        <li><Link to="researchOpportunity" style={{ textDecoration: "none", color: "black", fontWeight: "600",zIndex:'100' }} >Add research Opportunity</Link></li>
                        <li><Link to="SignUp" style={{ textDecoration: "none", color: "black", fontWeight: "600",zIndex:'100' }}>Sign Up</Link></li>
                        <li><Link to="SignIn" style={{ textDecoration: "none", color: "black", fontWeight: "600",zIndex:'100' }}>Sign In</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideNav;

