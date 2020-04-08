import React from 'react'
import './SearchBar.css'

const SearchBar = props => {

    return (
        <div className="container">
            <input className="searchBar" placeholder="search"></input>
            <select id="topic" style="topic">
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