import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../core/store";
import { clearOrder, clearCart } from "../../../packages/core/reducers";
import { useNavigate } from "react-router-dom";

export const useReceipt = () => {
  const order = useSelector((state: RootState) => state.order.orderData);
  const cart = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const moms = totalPrice * 0.2;

  const handleNewOrder = () => {
    dispatch(clearCart());
    dispatch(clearOrder());
    navigate("/");
  };

  return { order, cart, totalPrice, moms, handleNewOrder, navigate };
};
