import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useNavbar } from "../data/useNavbar";

export const Navbar = () => {
  const { cartCount, hideCartNumber, hideCartIcon } = useNavbar();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <Link to="/" className="text-lg font-semibold">Meny</Link>
      
      {!hideCartIcon && ( 
        <Link to="/cart" className="relative flex items-center space-x-2">
          <ShoppingCartIcon className="h-6 w-6 text-white" />
          {!hideCartNumber && cartCount > 0 && ( 
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      )}
    </nav>
  );
};

