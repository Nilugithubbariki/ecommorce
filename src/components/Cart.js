import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("CartItems", cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Wellcome to Cart page...</h1>
      <button
        className="p-2 m-2 border bg-yellow-300 text-black rounded-lg text-center"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Cart is empty Add Items to the Cart</h1>}
      {cartItems?.map((item) => {
        return (
          <div>
            <div>
              <img src={item.images[0]} />
            </div>
            <h3>{item.brand}</h3>
            <h3>{item.description}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
