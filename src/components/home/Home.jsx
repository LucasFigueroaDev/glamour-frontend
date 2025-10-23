import { useLocation } from "react-router-dom";
import GlamourBanner from "../glamourBanner/GlamourBanner.jsx";
import CategoryShop from "../categoryShop/CategoryShop.jsx";
import NewArrivals from '../newArrivals/NewArrivals.jsx';
import PaymentPromoBanner from '../paymentPromo/PaymentPromoBanner.jsx';
import TrustSection from '../trustSection/TrustSection.jsx';
import { useEffect } from "react";

const Home = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location.hash]);

    return (
        <>
            <div id="home">
                <GlamourBanner />
            </div>
            <CategoryShop />
            <div id="newArrivals">
                <NewArrivals />
            </div>
            <PaymentPromoBanner />
            <TrustSection />
        </>
    );
};

export default Home;