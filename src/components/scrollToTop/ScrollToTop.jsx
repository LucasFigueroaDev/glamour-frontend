import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Si hay un hash (#ancla) en la URL, NO hacemos scroll al tope.
        // La lógica de Home.jsx se encargará del scroll al ancla.
        if (hash) {
            return;
        }

        // Si NO hay hash, forzamos el scroll al tope de la ventana
        window.scrollTo(0, 0);
    }, [pathname, hash]); // Se ejecuta cuando la ruta o el hash cambian

    return null; // Este componente no renderiza nada, solo maneja efectos secundarios
};

export default ScrollToTop;