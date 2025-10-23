import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice/cartSlice";
import toast from "react-hot-toast";

export const useCartActions = () => {
    const dispatch = useDispatch();

    const addToCart = (product, quantity) => {
        if (!product || quantity <= 0 || quantity > product.stock) {
            toast.error(`Por favor, seleccione una cantidad valida`, { duration: 2000 });
            return false;
        }
        const itemToAdd = {
            product: product,
            quantity: quantity
        };
        dispatch(addItem(itemToAdd));
        toast.success(`Producto agregado al carrito`, { duration: 2000 });
        return true;
    };

    return { addToCart };
};