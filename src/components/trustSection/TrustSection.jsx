import { FaTruck } from "react-icons/fa";
import { MdOutlineChangeCircle,MdOutlineWorkspacePremium } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import './trustSection.css';
const TrustSection = () => {
    const trustFeatures = [
        {
            icon: <FaTruck />, 
            title: 'ENVÍO RÁPIDO',
            description: 'Entrega garantizada en 48-72 horas hábiles.'
        },
        {
            icon: <MdOutlineChangeCircle />, 
            title: 'CAMBIOS Y DEVOLUCIONES',
            description: '30 días para cambios y devoluciones sin costo adicional.'
        },
        {
            icon: <RiSecurePaymentLine />, 
            title: 'PAGO SEGURO',
            description: 'Transacciones protegidas con encriptación SSL de 256 bits.'
        },
        {
            icon: <MdOutlineWorkspacePremium />,
            title: 'CALIDAD PREMIUM',
            description: 'Prendas confeccionadas con los mejores materiales y acabados.'
        },
    ];

    return (
        <section className="trust-section">
            <div className="trust-grid">
                {trustFeatures.map((feature, index) => (
                    <div key={index} className="trust-card">
                        <div className="trust-icon">{feature.icon}</div>
                        <h3 className="trust-title">{feature.title}</h3>
                        <p className="trust-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustSection;