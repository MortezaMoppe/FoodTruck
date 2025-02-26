import { useNavigate } from "react-router-dom";

export const ETA = () => {
    const navigate = useNavigate();


return (
    <div className ="min-h-screen bg-gray-900 text-white p-6 flex flex-col justify-center items-center">
    <h2 className="text-2xl font-bold mb-4">Dina wontons tillagas!</h2>
      <p className="text-lg mb-4">ETA: 5 minuter</p>
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