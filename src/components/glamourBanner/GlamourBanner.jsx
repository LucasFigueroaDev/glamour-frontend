import React from 'react';
import './glamourBanner.css'; // Importa los estilos

const GlamourBanner = () => {
    return (
        <div className="glamour-banner-container">
            <p className="glamour-banner-season">Nueva Temporada - 2025</p>
            <h1 className="glamour-banner-title">Glamour</h1>
            <p className="glamour-banner-subtitle">
                Renueva tu armario con estilos seleccionados y elegantes. Descubre nuestros productos de moda.
            </p>
            <button className="glamour-banner-button">
                Compra Ahora
            </button>
        </div>
    );
};

export default GlamourBanner;