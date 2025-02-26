import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Cart } from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { Order } from "./components/Order";
import { Receipt } from "./components/Receipt";
import { ETA } from "./components/ETA";


export const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
      <Route path="/receipt" element={<Receipt />} />
      <Route path="/eta" element={<ETA />} />
    </Routes>
  </>
);
