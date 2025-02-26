import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Min Beställning</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Varukorgen är tom.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <span>{item.name} - {item.price} kr x {item.quantity}</span>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  X Ta bort
                </button>
              </div>
            ))}
            <div className="text-lg font-bold text-right mt-4">Totalt: {totalPrice} kr</div>
            
            <div className="flex gap-8 justify-center mt-4">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-40 mt-4"
              onClick={() => dispatch(clearCart())}
            >
              Töm varukorg
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-40 mt-4"
              onClick={() => navigate("/eta")}
            >
              Betala
            </button>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};
