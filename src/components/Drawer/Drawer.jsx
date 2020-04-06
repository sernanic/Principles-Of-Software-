import React from 'react';
import { Link } from 'react-router';

class List extends React.Component {
    render() {
        return (
            <div className="mainDrawer">
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        );
    }
}

export default List;

