import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbars.css'

const NavBars = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo"><h1 className="navbar-title">Glamour</h1></Link>
            <div className="hamburger" onClick={toggleMenu}>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
            </div>
            <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
                <li className="navbar-item"><Link to="/women" className="navbar-link">Women</Link></li>
                <li className="navbar-item"><Link to="/man" className="navbar-link">Man</Link></li>
                <li className="navbar-item"><Link to="/accesories" className="navbar-link">Accesories</Link></li>
                <li className="navbar-item"><Link to="/newArrivals" className="navbar-link">New Arrivals</Link></li>
                <li className="navbar-item"><Link to="/sale" className="navbar-link">Sale</Link></li>
                <li className="navbar-item"><Link to="/search" className="navbar-link">Search</Link></li>
                <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
                <li className="navbar-item"><Link to="/cart" className='navbar-link'>🛒<span>0</span></Link></li>
            </ul>
        </nav>
    )
}

export default NavBars
