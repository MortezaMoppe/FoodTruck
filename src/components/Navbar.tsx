import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const Navbar = () => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/">Meny</Link>
      <Link to="/cart"> ({cartCount})</Link>
    </nav>
  );
};
