import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../core/store";

export const useNavbar = () => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  const location = useLocation();
  const hideCartNumber = ["/cart"].includes(location.pathname);
  const hideCartIcon = ["/eta", "/receipt"].includes(location.pathname);

  return { cartCount, hideCartNumber, hideCartIcon };
};
