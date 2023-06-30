import React from "react";

import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import Contact from "./pages/Contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./CartContext.js";

const App = () => {
  return (
    <CartProvider>
      <div className="bg-black">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
};

export default App;
