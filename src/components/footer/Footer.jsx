import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4 className="footer-title">COMPRAR</h4>
                    <ul className="footer-links">
                        <li><a href="/shop/mujer">Mujer</a></li>
                        <li><a href="/shop/hombre">Hombre</a></li>
                        <li><a href="/shop/novedades">Novedades</a></li>
                        <li><a href="/shop/sale">Sale</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4 className="footer-title">AYUDA</h4>
                    <ul className="footer-links">
                        <li><a href="/contacto">Contacto y FAQs</a></li>
                        <li><a href="/pagos">Métodos de Pago</a></li>
                        <li><a href="/envios">Envíos y Entregas</a></li>
                        <li><a href="/devoluciones">Cambios y Devoluciones</a></li>
                        <li><a href="/legal">Política de Privacidad</a></li>
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
                        <a href="https://www.instagram.com/glamourshop" target="_blank" rel="noopener noreferrer">
                            <img className="icon-placeholder" src="./instagram.png" alt="Logo de instagram" />
                        </a>
                        <a href="https://www.facebook.com/glamourshop" target="_blank" rel="noopener noreferrer">
                            <img className="icon-placeholder" src="./facebook.png" alt="Logo de facebook" />
                        </a>
                        <a href="https://www.tiktok.com/@glamourshop" target="_blank" rel="noopener noreferrer">
                            <img className="icon-placeholder" src="./tiktok.png" alt="Logo de tiktok" />
                        </a>
                        <a href="https://www.whatsapp.com/@glamourshop" target="_blank" rel="noopener noreferrer">
                            <img className="icon-placeholder" src="./whatsapp.png" alt="Logo de whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Glamour Shop. Todos los derechos reservados.</p>
                <div className="payment-icons">
                    {/* Iconos de medios de pago */}
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