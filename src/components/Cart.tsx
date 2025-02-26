import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { removeFromCart, decreaseQuantity, clearCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Min Beställning</h2>
      {cart.length === 0 ? (
        <p>Varukorgen är tom.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between p-2 border-b">
              <span>
                {item.name} - {item.price} kr (x{item.quantity})
              </span>
              <div>
                <button
                  className="bg-gray-300 px-2 py-1 mx-1 rounded"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Ta bort
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-bold">Totalt: {totalPrice} SEK</p>
            <button
              className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
              onClick={() => dispatch(clearCart())}
            >
              Rensa Varukorg
            </button>
            <Link to="/order">
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded ml-2">
                Ta min order!
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
