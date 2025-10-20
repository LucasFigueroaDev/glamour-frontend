import React from 'react';
import GlamourBanner from "../glamourBanner/GlamourBanner.jsx";
import CategoryShop from "../categoryShop/CategoryShop.jsx";
import NewArrivals from '../newArrivals/NewArrivals.jsx';
import PaymentPromoBanner from '../paymentPromo/PaymentPromoBanner.jsx';
import TrustSection from '../trustSection/TrustSection.jsx';

const Home = () => {
    return (
        <>
            <GlamourBanner />
            <CategoryShop />
            <NewArrivals />
            <PaymentPromoBanner />
            <TrustSection />
        </>
    );
};

export default Home;