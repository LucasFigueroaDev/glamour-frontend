import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveCartState } from "../utils/localStoragePersistence";
import cartReducer from "./cartSlice/cartSlice";

const localStorageMiddleware =({getState}) => {
    return (next) => (action) => {
        // Ejecutamos la accion
        const result = next(action);
        // Verificamos si la accion modifica el carrito
        if(action.type.startsWith('cart/')){
            // Guardamos el carrito
            saveCartState(getState().cart);
        }
        return result;
    }
}

const preloadedState = loadState();

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});