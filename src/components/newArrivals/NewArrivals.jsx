import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; 
import './newArrivals.css';

const NewArrivals = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Configuración del carrusel (Settings)
    const sliderSettings = {
        dots: true,        // Muestra los puntos de navegación
        infinite: true,    // Permite el desplazamiento infinito
        speed: 500,        // Velocidad de la transición
        slidesToShow: 4,   // 4 tarjetas visibles en escritorio
        slidesToScroll: 1,
        autoplay: true,    // Auto-desplazamiento
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3, // 3 en tablet grande
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // 2 en tablet pequeña
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // 1 en móvil
                }
            }
        ]
    };

    // --- Lógica de Fetching (Se mantiene igual) ---
    useEffect(() => {
        const fetchNewArrivals = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/products/newArrivals');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const responseData = await response.json();
                const productsArray = responseData?.data?.payload;

                if (Array.isArray(productsArray)) {
                    setProducts(productsArray);
                } else {
                    setProducts([]);
                }

            } catch (e) {
                setError("No se pudieron cargar las novedades. Inténtalo más tarde.");
            } finally {
                setLoading(false);
            }
        };

        fetchNewArrivals();
    }, []);

    if (loading) return <div className="arrivals-section-container">Cargando novedades...</div>;
    if (error) return <div className="arrivals-section-container error">{error}</div>;

    // Si no hay productos, muestra el mensaje
    if (products.length === 0 && !loading) {
        return (
            <section className="arrivals-section">
                <h2 className="arrivals-title">New Arrivals</h2>
                <p className="no-products-message">No hay productos nuevos disponibles en este momento.</p>
            </section>
        );
    }

    return (
        <section className="arrivals-section">
            <h2 className="arrivals-title">New Arrivals</h2>

            {/* 💥 IMPLEMENTACIÓN DEL CARRUSEL */}
            <div className="carousel-container">
                <Slider {...sliderSettings}>
                    {products.map((product) => (
                        <div key={product._id} className="slide-item-wrapper">
                            {/* La tarjeta de producto ahora va dentro de cada item del carrusel */}
                            <div className="product-card">
                                <div className="product-image-container">
                                    <img src={product.thumbnail || 'default-image.jpg'} alt={product.title} className="product-image" />
                                    <button className="quick-view-btn">Vista Rápida</button>
                                </div>
                                <h3 className="product-name">{product.title}</h3>
                                <p className="product-price">${product.price ? product.price.toFixed(2) : 'N/A'}</p>
                                <button className="add-to-cart-btn">Añadir al Carrito</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <button className="shop-all-btn">Ver Toda la Colección</button>
        </section>
    );
};

export default NewArrivals;