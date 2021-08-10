import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="container">
            <ul className="navBar">
                <li><a href="#">About Us</a></li>
                <li><a href="#">For You</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Vlog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar
