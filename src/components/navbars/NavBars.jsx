import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCart4 } from "react-icons/bs";
import './navbars.css'
const NavBars = () => {
    const totalItemsInCart = useSelector(state => state.cart.totalQuantity);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className="navbar">
            <Link to="/#home" className="navbar-logo"><h1 className="navbar-title">Glamour</h1></Link>
            <div className="hamburger" onClick={toggleMenu}>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
                <span className={isOpen ? "bar open" : "bar"}></span>
            </div>
            <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
                <li className="navbar-item"><Link to="/categoria/mujer/68f022ca57e4e992611ed1ba" className="navbar-link">Mujer</Link></li>
                <li className="navbar-item"><Link to="/categoria/hombre/68f0230d57e4e992611ed1bd" className="navbar-link">Hombre</Link></li>
                <li className="navbar-item"><Link to="/categoria/accesorios/68f0233757e4e992611ed1c6" className="navbar-link">Accesorios</Link></li>
                <li className="navbar-item"><Link to="/#newArrivals" className="navbar-link">Novedades</Link></li>
                <li className="navbar-item"><Link to="/search" className="navbar-link">Buscar</Link></li>
                <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
                <li className="navbar-item"><Link to="/cart" className='navbar-link'><BsCart4 />{totalItemsInCart > 0 && (<span>{totalItemsInCart}</span>)}</Link></li>
            </ul>
        </nav>
    )
}

export default NavBars
