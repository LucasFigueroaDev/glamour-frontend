const storage = 'glamour-cart';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(storage);
        if (serializedState === null) {
            return undefined; // Si no hay nada devolvemos undefined, para que redux use el estado inicial (initialState)
        }
        return {cart: JSON.parse(serializedState)};
    } catch (e) {
        console.warn('Error al cargar el estado del carrito:', e);
        return undefined;
    }
}

export const saveCartState = (cartState) => {
    try {
        const serializedState = JSON.stringify(cartState);
        localStorage.setItem(storage, serializedState);
    } catch (e) {
        console.warn('Error al guardar el estado del carrito:', e);
    }
} 