import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="container">
            <ul className="navBar">
                <li><a>About Us</a></li>
                <li><a>For You</a></li>
                <li><a>Services</a></li>
                <li><a>Blog</a></li>
                <li><a>Vlog</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar
