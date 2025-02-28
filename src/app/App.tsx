import { Routes, Route } from "react-router-dom";
import { Menu } from "../pages/Menu";
import { Cart } from "../pages/Cart";
import { Navbar } from "../components/Navbar";
import { Order } from "../pages/Order";
import { Receipt } from "../pages/Receipt";



export const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/ETA" element={<Order />} />
      <Route path="/receipt" element={<Receipt />} />
    
    </Routes>
  </>
);
