import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const ETA = () => {
    const navigate = useNavigate();
    const order = useSelector((state: RootState) => state.order.orderData);


return (
    <div className ="min-h-screen bg-gray-900 text-white p-6 flex flex-col justify-center items-center">
    <h2 className="text-2xl font-bold mb-4">Dina wontons tillagas!!</h2>
    <p className="text-lg mb-2">ETA: {order?.eta || 5} minuter</p>
    <p className="text-md mb-4">Ordernummer: {order?.orderId || "N/A"}</p>
      <button
        className="bg-white text-gray-900 px-6 py-2 rounded hover:bg-gray-300 w-full max-w-md mb-4"
        onClick={() => navigate("/receipt")}
      >
        Se kvitto
      </button>
      <button
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full max-w-md"
        onClick={() => navigate("/")}
      >
        Gör en ny beställning
      </button>
    </div>
);
}