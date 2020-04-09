import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import UserProvider from '../../UserProvider'
import SearchResults from '../SearchResults/SearchResults'
import {Link} from 'react-router-dom'
import './SearchBar.css'



const SearchBar = props => {
    // const newSearches = UserSearchTeacher()
    
    function UserSearchTeacher() {
        // event.preventDefault();
        // var category = document.getElementById('searchCategory').value;
        // console.log(category);
        const [searches, setsearches] = useState([])
        useEffect(() => 
        {
            firebase.firestore().collection("fau").doc("users").collection("teachers")
            // field == x
            .where('displayName', "==", 'sernanic100')
            .limit(15)
            .onSnapshot((snapshot) => 
            {
                const newSearch = snapshot.docs.map((doc) => 
                ({
                    id: doc.id,
                    ...doc.data()
                }))
                setsearches(newSearch)
            })
        })
        return searches
    }

    function UserSearchCategory() {
        const [searches, setsearches] = useState([])
        // event.preventDefault();
        useEffect(() => 
        {
            firebase.firestore().collection("fau").doc("users").collection("teachers")
            // field == x
            .where('displayName', "==", 'sernanic100')
            .limit(15)
            .onSnapshot((snapshot) => 
            {
                const newSearch = snapshot.docs.map((doc) => 
                ({
                    id: doc.id,
                    ...doc.data()
                }))
                setsearches(newSearch)
            })
        })
        return searches
    }

    function UserSearchDocuments() {
        // event.preventDefault();
        const [searches, setsearches] = useState([])
        useEffect(() => 
        {
            firebase.firestore().collection("fau").doc("users").collection("teachers")
            // field == x
            .where('displayName', "==", 'sernanic100')
            .limit(15)
            .onSnapshot((snapshot) => 
            {
                const newSearch = snapshot.docs.map((doc) => 
                ({
                    id: doc.id,
                    ...doc.data()
                }))
                setsearches(newSearch)
            })
        })
        return searches
    }
    
    const newSearches = UserSearchTeacher()
    return (
        
            <div className="searchContainer">
            <form >
            <input className="searchBar" placeholder="search" id="searchInput"></input>
            {/* <select className="topic" id="searchCategory">
                <option value="teacher" selected>Professor</option>
                <option value="category" >Research Category</option>
                <option value="Documents">Documents Published</option>
            </select> */}
            <button className="searchButton btn z-depth-1 buttonStyle">Search</button>
            {/* <UserProvider value = {newSearches}>
                <link rel="stylesheet" href=""/>
                <li><Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: "600", zIndex: '100' }}>SearchResults</Link></li>
            </UserProvider> */}
            </form>
            
        </div>
        
        
    )
}


export default SearchBar