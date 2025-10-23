import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], 
    totalQuantity: 0,
    totalAmount: 0,
};

// Función para calcular el total
const calculateTotals = (items) => {
    let totalQuantity = 0;
    let totalAmount = 0;
    items.forEach(item => {
        totalQuantity += item.quantity;
        totalAmount += item.product.price * item.quantity;
    });
    return { totalQuantity, totalAmount };
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload; // { product: {...}, quantity: 1 }
            const existingItemIndex = state.items.findIndex(
                item => item.product._id === newItem.product._id
            );
            if (existingItemIndex >= 0) {
                state.items[existingItemIndex].quantity += newItem.quantity;
            } else {
                state.items.push(newItem);
            }
            const { totalQuantity, totalAmount } = calculateTotals(state.items);
            state.totalQuantity = totalQuantity;
            state.totalAmount = totalAmount;
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload; 
            // Filtrar el array para remover el ítem
            state.items = state.items.filter(item => item.product._id !== idToRemove);
            const { totalQuantity, totalAmount } = calculateTotals(state.items);
            state.totalQuantity = totalQuantity;
            state.totalAmount = totalAmount;
        },
        // 3. Vaciar completamente el carrito
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;