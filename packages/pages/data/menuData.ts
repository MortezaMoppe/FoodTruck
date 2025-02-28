import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMenu, MenuItem } from "../../../packages/core/reducers";
import { useGetMenuQuery } from "../../core/api";
import { addToCart } from "../../../packages/core/reducers";

export const useMenu = () => {
  const dispatch = useDispatch();
  const { data, error } = useGetMenuQuery();
  const menu = data?.items || [];

  const mainDish = menu.filter((item: MenuItem) => item.type === "wonton");
  const dips = menu.filter((item: MenuItem) => item.type === "dip");

  useEffect(() => {
    if (Array.isArray(menu)) {
      dispatch(setMenu(menu));
    }
  }, [menu, dispatch]);

  const handleAddToCart = (item: MenuItem) => {
    dispatch(addToCart({ ...item, id: Number(item.id), quantity: 1 }));
  };

  return { mainDish, dips, error, handleAddToCart };
};
