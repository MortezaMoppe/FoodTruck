import { useOrder } from "../data/oderData";

export const Order = () => {
  const { order, navigate, formattedEta, handleClearOrder } = useOrder();

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
    <div className="min-h-screen bg-gray-700 text-gray-100 p-6 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Dina wontons tillagas</h2>
      <p className="text-md mb-4">Order-ID #{order.id || "Ej tillgängligt"}</p>
      <p className="text-lg mb-4">Beräknad leverans: {formattedEta}</p>

      <button
        className="bg-gray-100 text-gray-900 px-6 py-2 rounded hover:bg-gray-300 w-full max-w-md mb-4"
        onClick={() => navigate("/receipt")}
      >
        Se kvitto
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full max-w-md"
        onClick={handleClearOrder}
      >
        Gör en ny beställning
      </button>
    </div>
  );
};
