import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../../redux/cartSlice/cartSlice.js';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './cartPage.css';

const CartPage = () => {
    // 1. Acceder al estado global del carrito
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleRemove = (productId) => {
        dispatch(removeItem(productId));
    };
    const handleClearCart = () => {
        Swal.fire({
            title: '¿Vaciar carrito?',
            text: 'Esta acción eliminará todos los productos del carrito.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar',
            background: '#fff',
            color: '#333',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(clearCart());
                Swal.fire({
                    title: 'Carrito vacío',
                    text: 'Todos los productos fueron eliminados.',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });
    };
    if (cart.items.length === 0) {
        return (
            <div className="cart-container empty-cart">
                <h1>Tu Carrito Está Vacío</h1>
                <p>Parece que no has añadido nada a tu carrito. ¡Explora nuestros productos!</p>
                <Link to="/productos" className="continue-shopping-btn">
                    Seguir Comprando
                </Link>
            </div>
        );
    }
    return (
        <div className="cart-container">
            <h1 className="cart-title">Tu Carrito de Compras</h1>
            <div className="cart-grid">
                <div className="cart-items-column">
                    {cart.items.map((item) => (
                        <div key={item.product._id} className="cart-item">
                            <img
                                src={item.product.thumbnail || '/placeholder.jpg'}
                                alt={item.product.title}
                                className="cart-item-image"
                            />
                            <div className="item-details">
                                <Link to={`/producto/${item.product._id}`} className="item-title">
                                    {item.product.title}
                                </Link>
                                <p className="item-price">Precio Unitario: **${item.product.price.toFixed(2)}**</p>
                                <p className="item-quantity">Cantidad: **{item.quantity}**</p>
                            </div>
                            <div className="item-subtotal">
                                **Subtotal: ${(item.product.price * item.quantity).toFixed(2)}**
                            </div>
                            <button
                                onClick={() => handleRemove(item.product._id)}
                                className="remove-item-btn"
                            >
                                X
                            </button>
                        </div>
                    ))}
                    <button onClick={handleClearCart} className="clear-cart-btn">
                        Vaciar Carrito
                    </button>
                </div>
                <div className="cart-summary-column">
                    <h2 className="summary-title">Resumen del Pedido</h2>
                    <div className="summary-line">
                        <span>Total Ítems:</span>
                        <span>{cart.totalQuantity}</span>
                    </div>
                    <div className="summary-line final-total">
                        <span>Total a Pagar:</span>
                        <span>${cart.totalAmount.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn">
                        Proceder al Pago
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;