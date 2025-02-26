import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Cart } from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { Order } from "./components/Order";
import { Receipt } from "./components/Receipt";



export const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/eta" element={<Order />} />
      <Route path="/receipt" element={<Receipt />} />
    
    </Routes>
  </>
);
