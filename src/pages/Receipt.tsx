import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { clearOrder } from "../features/order/orderSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

export const Receipt = () => {
  const order = useSelector((state: RootState) => state.order.orderData);
  const cart = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!order) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Ingen order hittades</h2>
        <p className="text-gray-500 mb-4">Gå tillbaka och gör en ny beställning.</p>
        <button className="bg-blue-500 text-gray-100 px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate("/")}>
          Till Meny
        </button>
      </div>
    );
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const moms = totalPrice * 0.2;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 flex flex-col justify-center items-center">
     
      <div className="bg-gray-300 text-gray-900 p-4 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Kvitto</h2>
      <p className="text-md mb-2 text-center ">{order.id}</p>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center relative">
            <span className="text-left font-medium">{item.name} <br />
              <span className="text-sm text-gray-500">{item.quantity} stycken</span>
            </span>
            <span className="flex-grow mx-2 relative 
            before:content-['............................................................................']
             before:absolute before:top-1/2 before:left-0 before:right-0 before:-translate-y-1/2
              before:text-gray-400 before:overflow-hidden before:whitespace-nowrap before:pointer-events-none"></span>
            <span className="font-medium">{item.price * item.quantity} kr</span>
          </div>
        ))}
        <hr className="my-2 border-gray-400" />
        
        <div className="flex justify-between items-start w-full pt-2 mt-2">
        <div className="text-left">
    <p className="font-bold">Totalt:</p>
    <p className="text-sm text-gray-500">mom: 20% {moms.toFixed(2)} kr</p>
  </div>
  <p className="font-bold text-lg">{totalPrice} kr</p>
        </div>
      </div>
      <button
        className="bg-green-500 text-gray-100 px-6 py-2 rounded hover:bg-green-600 w-full max-w-md mt-4"
        onClick={() => {
          dispatch(clearCart());
          dispatch(clearOrder());
          navigate("/");
        }}
      >
        Gör en ny beställning
      </button>
    </div>
  );
};
