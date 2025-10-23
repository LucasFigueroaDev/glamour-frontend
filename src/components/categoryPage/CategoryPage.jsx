import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './categoryPage.css';
const url = import.meta.env.VITE_APP_API_URL;

const CategoryPage = () => {
    const { categoryName, categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!categoryId) return;
        console.log(categoryId);
        const fetchCategoryData = async () => {
            try {
                const endpoint = `${url}/api/products/category/${categoryId}`;
                const response = await fetch(endpoint);
                if (!response.ok) { throw new Error(`Error al cargar la categoría: ${response.status}`); }
                const responseData = await response.json();
                setProducts(responseData.data.payload || []);
            } catch (e) {
                console.error('Error al obtener los productos de la categoría:', e);
                setError(`No se pudieron cargar los productos de la categoría con ID: ${categoryId}`);
            } finally {
                setLoading(false);
            }
        };

        setLoading(true);
        fetchCategoryData();

    }, [categoryId]);

    if (loading) return <h1>Cargando productos...</h1>;
    if (error) return <h1 className="error">{error}</h1>;

    return (
        <div className="category-page-container">
            <h2>Productos de la categoría: {categoryName}</h2>

            <div className="product-list-grid">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product._id} className="product-card-category">
                            <div className="product-image-container-category">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="product-image-category"
                                />
                            </div>
                            <div className='product-content-category'>
                                <h3 className="product-name-category">{product.title}</h3>
                                <p className="product-price-category">${product.price ? product.price.toFixed(2) : 'N/A'}</p>
                                <div>
                                    <button className="quick-view-btn-category">Ver detalles</button>
                                    <button className="add-to-cart-btn-category">Añadir al Carrito</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-products-message">No hay productos disponibles en esta categoría.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;