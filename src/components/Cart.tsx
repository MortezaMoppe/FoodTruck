import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import { usePlaceOrderMutation } from "../api/foodtruckApi";
import { setOrder, clearOrder } from "../features/order/orderSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useState } from "react";

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [placeOrder, { data: orderData }] = usePlaceOrderMutation();
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;
    setLoading(true);

    try {
      const items = cart.map(item => Number(item.id)); 
      const result = await placeOrder({ items }).unwrap();
      dispatch(setOrder(result)); 
      dispatch(clearCart()); 
      navigate("/eta"); 
    } 
    catch (error) {
  
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Min Beställning</h2>
        
        {cart.length === 0 ? (
          <p className="text-gray-500">Din varukorg är tom.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <p key={item.id}>{item.name} - {item.price} kr x {item.quantity}</p>
            ))}
            <p className="font-bold mt-4">Totalt: {cart.reduce((total, item) => total + item.price * item.quantity, 0)} kr</p>
          </div>
        )}

        
        {cart.length > 0 && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full max-w-md mt-4"
            onClick={handlePlaceOrder}
            disabled={loading}
          >
            {loading ? "Lägger beställning..." : "Betala"}
          </button>
        )}

        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full max-w-md mt-2"
          onClick={() => dispatch(clearCart())}
        >
          Töm varukorg
        </button>
      </div>
    </div>
  );
};
