import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMenu, MenuItem } from "../features/menu/menuSlice";
import { useGetMenuQuery } from "../api/foodtruckApi";
import { addToCart } from "../features/cart/cartSlice";

export const Menu = () => {
  const dispatch = useDispatch();
  const { data, error } = useGetMenuQuery();
  const menu = data?.items || [];


  useEffect(() => {
    if (Array.isArray(menu)) {
      dispatch(setMenu(menu));
    }
  }, [menu, dispatch]);

  if (error) {
    return <p className="text-red-500"> Fel vid hämtning av menyn.</p>;
  }

  if (!Array.isArray(menu)) {
    return <p className="text-gray-500"> Laddar meny...</p>;
  }

  return (
    
    <div className="min-h-screen bg-green-100 p-6 flex justify-center">
    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4">Meny</h2>
      <div className="space-y-4">
        {menu.map((item: MenuItem) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2">
            <span className="text-lg font-semibold">{item.name} - {item.price} kr</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
            >
              + Lägg till
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};
