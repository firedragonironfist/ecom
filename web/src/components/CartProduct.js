import { CartContext } from "../CartContext.js";
import { useContext } from "react";
import { getProductData } from "../CardProd.js";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <div className="bg-black rounded-md px-3 py-1">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl text-yellow-300">{productData.title}</h3>
        </div>
        <div>
          <p className="text-xl text-yellow-300">{quantity} total</p>
        </div>
        <p className="text-xl text-yellow-300">${quantity * productData.price}</p>
      </div>
      <br></br>
      <div className="flex justify-end">
      <button className="bg-blue-500 rounded-md px-3 py-1" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </button>
      </div>
      </div>
      <br></br>
    </>
  );
}

export default CartProduct;
