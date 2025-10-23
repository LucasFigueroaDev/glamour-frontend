import React, { useState, useEffect } from 'react';
import './allProductsPage.css';
const url = import.meta.env.VITE_APP_API_URL;
const totalItems = 12;
const AllProductsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({
        totalPages: 1,
        hasPrevPage: false,
        hasNextPage: false,
    });
    useEffect(() => {
        const fetchAllProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const endpoint = `${url}/api/products/all?page=${currentPage}&limit=${totalItems}`;
                const response = await fetch(endpoint);
                if (!response.ok) { throw new Error(`Error ${response.status}: No se pudieron cargar los productos.`); }
                const responseData = await response.json();
                const data = responseData.data;
                setProducts(data.payload || []);
                setPagination({
                    totalPages: data.totalPages,
                    hasPrevPage: data.hasPrevPage,
                    hasNextPage: data.hasNextPage,
                    prevPage: data.prevPage,
                    nextPage: data.nextPage,
                    page: data.page // Guardar la página actual confirmada por el servidor
                });
            } catch (e) {
                console.error("Error al obtener todos los productos:", e);
                setError("No se pudo conectar con el servidor o cargar los productos.");
            } finally {
                setLoading(false);
            }
        };
        fetchAllProducts();
        // El useEffect debe ejecutarse cada vez que currentPage cambie
    }, [currentPage]);
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    if (loading) return <div className="allprod-page-container"><h1>Cargando productos...</h1></div>;
    if (error) return (
        <div className="allprod-page-container"><h1 className="allprod-error">{error}</h1></div>
    );
    if (products.length === 0 && !loading) return (
        <div className="allprod-page-container"><p className="allprod-no-products-message">El catálogo está vacío o no se encontraron productos.</p></div>
    );
    return (
        <div className="allprod-page-container">
            <h2>Catálogo Completo de Productos</h2>
            <div className="allprod-list-grid">
                {products.map(product => (
                    <div key={product._id} className="allprod-card">
                        <div className="allprod-image-container">
                            <img
                                src={product.thumbnail || '/placeholder-product.jpg'}
                                alt={product.title}
                                className="allprod-image"
                            />
                        </div>
                        <div className='allprod-content'>
                            <h3 className="allprod-name">{product.title}</h3>
                            <p className="allprod-price">${product.price ? product.price.toFixed(2) : 'N/A'}</p>
                            <div>
                                <button className="allprod-quick-view-btn">Ver detalles</button>
                                <button className="allprod-add-to-cart-btn">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination-controls">
                <button
                    onClick={() => handlePageChange(pagination.page - 1)}
                    disabled={!pagination.hasPrevPage}
                    className="pagination-btn"
                >
                    &laquo; Anterior
                </button>
                <span className="pagination-info">
                    Página {pagination.page}
                </span>
                <button
                    onClick={() => handlePageChange(pagination.page + 1)}
                    disabled={!pagination.hasNextPage}
                    className="pagination-btn"
                >
                    Siguiente &raquo;
                </button>
            </div>
        </div>
    );
};

export default AllProductsPage;