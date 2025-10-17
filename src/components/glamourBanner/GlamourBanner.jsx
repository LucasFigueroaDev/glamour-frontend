import React from 'react';
import './glamourBanner.css'; // Importa los estilos

const GlamourBanner = () => {
    return (
        <div className="glamour-banner-container">
            <p className="glamour-banner-season">New Season - SS25</p>
            <h1 className="glamour-banner-title">Glamour</h1>
            <p className="glamour-banner-subtitle">
                Elevate your wardrobe with curated styles in soft pastels and timeless silhouettes. Discover pieces
                that blend elegance with everyday comfort.
            </p>
            <button className="glamour-banner-button">
                Shop Now
            </button>
        </div>
    );
};

export default GlamourBanner;