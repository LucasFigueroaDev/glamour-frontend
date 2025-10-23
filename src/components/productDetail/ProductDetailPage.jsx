import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCartActions } from '../../hooks/cartActions/useCartActions';
import './productDetailPage.css';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const ProductDetailPage = () => {
    const { productId } = useParams();
    const { addToCart } = useCartActions();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        if (!productId) return;
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);
            try {
                const endpoint = `${API_BASE_URL}/api/products/${productId}`;
                const response = await fetch(endpoint);
                if (response.status === 404) { throw new Error("Producto no encontrado."); }
                if (!response.ok) { throw new Error(`Error ${response.status}: No se pudo cargar el producto.`); }
                const responseData = await response.json();
                setProduct(responseData.data.payload);
            } catch (e) {
                console.error("Error al obtener detalle del producto:", e);
                setError("Error al cargar los datos del producto.");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [productId]);
    // Funciones de manejo
    const handleAddToCart = () => {
        if (product && quantity > 0 && quantity <= product.stock) {
            const success = addToCart(product, quantity);
            if (success) {
                setQuantity(1);
            }
        } else {
            // Manejo de error base (el hook ya mostrará el toast si falla la validación)
            if (product) {
                addToCart(product, quantity); // Llama al hook solo para mostrar el error de validación
            }
        }
    };
    if (loading) return <div className="product-detail-container"><h1>Cargando detalles...</h1></div>;
    if (error) return (
        <div className="product-detail-container">
            <h1 className="detail-error">Error: {error}</h1>
            <p>Verifique si el ID del producto es correcto.</p>
        </div>
    );
    if (!product) return <div className="product-detail-container"><h1>Producto no disponible.</h1></div>;
    return (
        <div className="product-detail-container">
            <div className="product-grid">
                <div className="image-column">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="main-product-image"
                    />
                </div>
                <div className="info-column">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-price">${product.price ? product.price.toFixed(2) : 'N/A'}</p>
                    <div className="product-description">
                        <h3>Descripción</h3>
                        <p>{product.description}</p>
                    </div>
                    <div className="stock-info">
                        Disponibilidad: {product.stock > 0 ?
                            <span className="in-stock">En Stock ({product.stock})</span> :
                            <span className="out-of-stock">Agotado</span>
                        }
                    </div>
                    {product.stock > 0 && (
                        <div className="purchase-controls">
                            <div className="quantity-selector">
                                <label htmlFor="quantity">Cantidad:</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    min="1"
                                    max={product.stock}
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.min(e.target.value, product.stock))}
                                    className="quantity-input"
                                />
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="add-to-cart-btn-detail"
                                disabled={quantity > product.stock || quantity < 1}
                            >
                                Añadir al Carrito
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;