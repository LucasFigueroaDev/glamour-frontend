import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4 className="footer-title">COMPRAR</h4>
                    <ul className="footer-links">
                        <li><Link to="/categoria/mujer/68f022ca57e4e992611ed1ba">Mujer</Link></li>
                        <li><Link to="/categoria/hombre/68f0230d57e4e992611ed1bd">Hombre</Link></li>
                        <li><Link to="/#newArrivals">Novedades</Link></li>
                        <li><Link to="/#categorias">Categorias</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4 className="footer-title">AYUDA</h4>
                    <ul className="footer-links">
                        <li><Link href="/contacto">Contacto y FAQs</Link></li>
                        <li><Link href="/pagos">Métodos de Pago</Link></li>
                        <li><Link href="/envios">Envíos y Entregas</Link></li>
                        <li><Link href="/devoluciones">Cambios y Devoluciones</Link></li>
                        <li><Link href="/legal">Política de Privacidad</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4 className="footer-title">GLAMOUR SHOP</h4>
                    <p>Av. Principal 1234, Córdoba</p>
                    <p>Lun a Vie de 9 a 18 hs.</p>
                    <p>Email: <a href="mailto:info@glamour.com">info@glamour.com</a></p>
                    <p>Tel: <a href="tel:+541155551234">+54 11 5555 1234</a></p>
                </div>
                <div className="footer-column social-newsletter-column">
                    <h4 className="footer-title">SÍGUENOS</h4>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img className="icon-placeholder" src="./instagram.png" alt="Logo de instagram" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img className="icon-placeholder" src="./facebook.png" alt="Logo de facebook" />
                        </a>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                            <img className="icon-placeholder" src="./tiktok.png" alt="Logo de tiktok" />
                        </a>
                        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                            <img className="icon-placeholder" src="./whatsapp.png" alt="Logo de whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Glamour Shop. Todos los derechos reservados.</p>
                <div className="payment-icons">
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>Amex</span>
                    <span>PayPal</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;