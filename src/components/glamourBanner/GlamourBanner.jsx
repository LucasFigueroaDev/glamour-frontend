import { Link } from 'react-router-dom';
import './glamourBanner.css'; // Importa los estilos

const GlamourBanner = () => {
    return (
        <div id='glamour' className="glamour-banner-container">
            <p className="glamour-banner-season">Nueva Temporada - 2025</p>
            <h1 className="glamour-banner-title">Glamour</h1>
            <p className="glamour-banner-subtitle">
                Renueva tu armario con estilos seleccionados y elegantes. Descubre nuestros productos de moda.
            </p>
            <Link to="/productos" className="glamour-banner-button">
                Compra Ahora
            </Link>
        </div>
    );
};

export default GlamourBanner;