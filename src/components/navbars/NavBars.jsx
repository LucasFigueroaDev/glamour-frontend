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
                <li className="navbar-item"><Link to="/women" className="navbar-link">Mujer</Link></li>
                <li className="navbar-item"><Link to="/man" className="navbar-link">Hombre</Link></li>
                <li className="navbar-item"><Link to="/accesories" className="navbar-link">Accesorios</Link></li>
                <li className="navbar-item"><Link to="/newArrivals" className="navbar-link">Novedades</Link></li>
                <li className="navbar-item"><Link to="/search" className="navbar-link">Buscar</Link></li>
                <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
                <li className="navbar-item"><Link to="/cart" className='navbar-link'>🛒<span>0</span></Link></li>
            </ul>
        </nav>
    )
}

export default NavBars
