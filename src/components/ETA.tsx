import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {  clearOrder } from "../features/order/orderSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

export const Order = () => {
  const order = useSelector((state: RootState) => state.order.orderData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     {

    }
  }, [order]);

  if (!order) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Ingen order hittades</h2>
        <p className="text-gray-500 mb-4">Gå tillbaka och gör en ny beställning.</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate("/")}
        >
          Till menyn
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Dina wontons tillagas!</h2>
      <p className="text-lg mb-2">ETA: {order.eta} minuter</p>
      <p className="text-md mb-4"> {order.orderId || "Ej tillgängligt"}</p>

      <button
        className="bg-white text-gray-900 px-6 py-2 rounded hover:bg-gray-300 w-full max-w-md mb-4"
        onClick={() => navigate("/receipt")}
      >
        Se kvitto
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full max-w-md"
        onClick={() => {
          dispatch(clearOrder());
          dispatch(clearCart());
          navigate("/");
        }}
      >
        Gör en ny beställning
      </button>
    </div>
  );
};
