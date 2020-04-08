import React from 'react'
import './SearchBar.css'
import 'materialize-css';
import { Button, Card, Autocomplete, Col } from 'react-materialize';

const SearchBar = props => {

    return (
        <div className="container">
            <Autocomplete
                id="Autocomplete-1"
                // className="searchBar"
                options={{
                    data: {
                        'Gus Fring': null,
                        'Saul Goodman': null,
                        'Tuco Salamanca': 'https://placehold.it/250x250'
                    }
                }}
                placeholder="Insert here"
            />
            {/* <input className="searchBar" placeholder="search"></input> */}
            <select id="topic">
                <option value="teacher">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <button>Search</button>
        </div>
    )
}

export default SearchBar