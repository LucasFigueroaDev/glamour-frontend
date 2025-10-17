import React from 'react';
import GlamourBanner from "../glamourBanner/GlamourBanner.jsx";
import CategoryShop from "../categoryShop/CategoryShop.jsx";
import NewArrivals from '../newArrivals/NewArrivals.jsx';

const Home = () => {
    return (
        <>
            <GlamourBanner />
            <CategoryShop />
            <NewArrivals />
        </>
    );
};

export default Home;