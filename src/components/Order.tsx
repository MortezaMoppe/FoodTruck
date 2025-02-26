import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { usePlaceOrderMutation } from "../api/foodtruckApi";
import { setOrder } from "../features/order/orderSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export const Order = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const [placeOrder, { data: orderData, error: orderError }] = usePlaceOrderMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (orderData) {
      dispatch(setOrder(orderData));
      dispatch(clearCart());
      navigate("/receipt");
    }
  }, [orderData, dispatch, navigate]);

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;  
    setLoading(true);
    await placeOrder({ items: cart });
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Dina wontons tillagas!</h2>
      {orderError && <p className="text-red-500"> Fel vid beställning: {orderError.toString()}</p>}
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={handlePlaceOrder}
        disabled={loading}
      >
        {loading ? "Lägger beställning..." : "Se kvitto"}
      </button>
    </div>
  );
};
