export { default as menuReducer } from "./data/menuSlice";
export { default as cartReducer } from "./data/cartSlice";
export { default as orderReducer } from "./data/orderSlice";

export { setOrder, clearOrder } from "./data/orderSlice";

export { addToCart, clearCart, removeFromCart, decreaseQuantity } from "./data/cartSlice";

export {setMenu} from "./data/menuSlice";
export type { MenuItem } from "./data/menuSlice";
