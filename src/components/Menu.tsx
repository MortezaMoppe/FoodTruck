import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMenu } from "../features/menu/menuSlice";
import { useGetApiKeyQuery, useGetMenuQuery } from "../api/foodtruckApi";
import { addToCart } from "../features/cart/cartSlice";

export const Menu = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { data: apiKeyData } = useGetApiKeyQuery();
  const { data: menu } = useGetMenuQuery(apiKey || "");

  useEffect(() => {
    if (apiKeyData?.apiKey) {
      setApiKey(apiKeyData.apiKey);
    }
  }, [apiKeyData]);

  useEffect(() => {
    if (menu) {
      dispatch(setMenu(menu));
    }
  }, [menu, dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Meny</h2>
      {menu?.map((item) => (
        <div key={item.id} className="flex justify-between p-2 border-b">
          <span>{item.name} - {item.price} kr</span>
          <button className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => dispatch(addToCart(item))}
           >
            Lägg till
          </button>
        </div>
      ))}
    </div>
  );
};
