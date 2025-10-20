import React from 'react';
import './paymentPromoBanner.css';

const PaymentPromoBanner = () => {
    const promoDetails = {
        discount: "20% OFF",
        method: "PAGANDO EN EFECTIVO O TRANSFERENCIA",
        condition: "Aplicable en todas las colecciones. Válido solo en Argentina.",
        cta: "VER CÓMO APLICAR"
    };

    return (
        <section className="payment-promo-section">
            <div className="payment-promo-content">
                <h2 className="promo-discount">{promoDetails.discount}</h2>
                <p className="promo-method">{promoDetails.method}</p>
                <p className="promo-condition">{promoDetails.condition}</p>
                <a href="/faq-payments" className="payment-promo-cta">
                    {promoDetails.cta}
                </a>
            </div>
        </section>
    );
};

export default PaymentPromoBanner;