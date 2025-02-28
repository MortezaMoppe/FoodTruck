import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store";
import { useNavigate } from "react-router-dom";
import { usePlaceOrderMutation } from "../../core/api";
import { setOrder, clearOrder } from "../../../packages/core/reducers";
import { clearCart, removeFromCart, decreaseQuantity } from "../../../packages/core/reducers";
import { useState } from "react";

export const useCart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [placeOrder] = usePlaceOrderMutation();
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;
    setLoading(true);

    try {
      const items = cart.map((item) => Number(item.id));
      const result = await placeOrder({ items }).unwrap();

      dispatch(setOrder({
        id: result.order?.id,
        eta: result.order.eta,
        timestamp: result.order.timestamp,
      }));

      navigate("/eta");
    } catch (error) {
      console.error("Order-fel:", error);
    }

    setLoading(false);
  };

  return {
    cart,
    dispatch,
    navigate,
    handlePlaceOrder,
    loading,
    clearOrder,
    clearCart,
    removeFromCart,
    decreaseQuantity,
  };
};
