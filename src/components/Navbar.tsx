import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex justify-between">
    <Link to="/">Morteza Foodtruck</Link>
    <Link to="/cart">Varukorg</Link>
  </nav>
);