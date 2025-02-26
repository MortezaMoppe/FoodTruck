import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMenu, MenuItem } from "../features/menu/menuSlice";
import { useGetMenuQuery } from "../api/foodtruckApi";
import { addToCart } from "../features/cart/cartSlice";

export const Menu = () => {
  const dispatch = useDispatch();
  const { data: menu, error } = useGetMenuQuery();

  

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
    <div className="p-4">
      <h2 className="text-xl mb-4">Meny</h2>
      {menu.map((item: MenuItem) => (
        <div key={item.id} className="flex justify-between p-2 border-b">
          <span>{item.name} - {item.price} kr</span>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
          >
            Lägg till
          </button>
        </div>
      ))}
    </div>
  );
};
