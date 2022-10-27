import React from "react"
import './App.css';

function NavBar(){
    return(
        <div className="page-top">
            <div className="logo">The Nav</div>
            <ul className="link-list">
                <li>Home</li>
                <li>Contact</li>
                <li>About us</li>
            </ul>
        </div>
    )
}

export default NavBar