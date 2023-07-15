import { React, useState, useContext } from "react";
import logo from "../assets/logo.svg";
import { Dialog } from "@headlessui/react";
import { ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct.js";

const Navbar = () => {
  const cart = useContext(CartContext);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const checkout = async () => {
    await fetch("https://ecom-o62i.onrender.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  return (
    <nav className="fixed hrefp-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex items-center z-50">
      <img src={logo} alt="Logo" className="w-12 mr-4" />
      <ul className="flex list-none m-0 p-0">
        <li className="mr-4">
          <a href="/" className="text-yellow-100 hover:text-yellow-300">
            Home
          </a>
        </li>
        <li className="mr-4">
          <a href="/Products" className="text-yellow-100 hover:text-yellow-300">
            Products
          </a>
        </li>
      </ul>
      <div className="ml-auto pr-4">
        <button
          className="flex items-center w-40 h-10 text-center title-font font-medium text-s text-gray-900 bg-yellow-300 rounded"
          onClick={() => setIsCartOpen(true)}
        >
          <span className="ml-2 mr-4">{productsCount} items in Cart</span>
          <ShoppingCartIcon className="w-6 h-6" />
        </button>
      </div>

      <Dialog
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="fixed inset-0 bg-gray-800 opacity-50"></div>

        <div className="bg-yellow-300 p-6 rounded shadow-lg w-96 relative z-10">
          <div className="flex justify-end">
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-black hover:text-yellow-100 focus:outline-none flex items-center"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <h1 className="text-lg font-bold mb-4 text-black">Shopping Cart</h1>
          {productsCount > 0 ? (
            <div className="max-h-48 overflow-y-auto">
              <p>Items in your cart:</p>
              <br></br>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity.toFixed(2)}
                ></CartProduct>
              ))}
              <div className="flex justify-end px-2">
                <h1 className="text-black">Total: ${cart.getTotalCost()} </h1>
              </div>
              <div className="flex justify-end px-2">
                <button
                  className="bg-green-600 rounded-md px-3 py-1"
                  onClick={checkout}
                >
                  Purchase Items!
                </button>
              </div>
            </div>
          ) : (
            <h2 className="text-md font-bold mb-4 text-black">
              Your Cart Is Empty
            </h2>
          )}
        </div>
      </Dialog>
    </nav>
  );
};

export default Navbar;
