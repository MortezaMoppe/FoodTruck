import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Link } from "react-router-dom";

export const Receipt = () => {
  const { orderId, eta } = useSelector((state: RootState) => state.order);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">KVITTO</h2>
      {orderId ? (
        <>
          <p>Ordernummer: {orderId}</p>
          <p>Beräknad tid: {eta} minuter</p>
        </>
      ) : (
        <p>Ingen beställning gjord.</p>
      )}
      <Link to="/">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Gör en ny beställning
        </button>
      </Link>
    </div>
  );
};
