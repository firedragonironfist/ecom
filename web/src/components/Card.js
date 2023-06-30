import React from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function Card(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <div className="flex justify-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full"
              src={product.imageUrl}
            />
          </div>
          <div className="mt-4 w-full sm:w-auto">
            <h3 className="text-white text-xs tracking-widest title-font mb-1">
              {product.category}
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              {product.title}
            </h2>
            <p className="mt-1 text-yellow-100">Price: {product.price}</p>
            <div className="flex flex-wrap items-center">
              {productQuantity > 0 ? (
                <div className="w-full sm:w-auto">
                  <div className="flex items-center">
                    <span className="text-yellow-300 mr-2">
                      In Cart: {productQuantity}
                    </span>
                    <button
                      onClick={() => cart.addOneToCart(product.id)}
                      className="text-black bg-yellow-300 hover:text-yellow-100 focus:outline-none rounded-md px-3 py-1"
                    >
                      +
                    </button>
                    <div className="pl-2">
                      <button
                        onClick={() => cart.removeOneFromCart(product.id)}
                        className="text-black bg-yellow-300 hover:text-yellow-100 focus:outline-none rounded-md px-3 py-1"
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <br></br>
                  <div>
                    <button
                      onClick={() => cart.deleteFromCart(product.id)}
                      className="text-yellow-300 bg-red-800 hover:text-yellow-100 focus:outline-none rounded-md px-3 py-1"
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className="text-yellow-300 hover:text-yellow-100 focus:outline-none"
                  onClick={() => cart.addOneToCart(product.id)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
