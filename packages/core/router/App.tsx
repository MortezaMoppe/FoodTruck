import { Routes, Route } from "react-router-dom";
import { Menu } from "../../pages";
import { Cart } from "../../pages";
import { Navbar } from "../../base/ui";
import { Order } from "../../pages";
import { Receipt } from "../../pages";
import React from "react";



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
