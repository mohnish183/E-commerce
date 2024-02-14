import React from "react";
import { createContext, useState } from "react";
import Cart from "./Cart";
import DynamicItem from "./DynamicItem";
export const CartContext = createContext();
export const CartStore = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (itemId) => {
    setCartItems([...cartItems, itemId]);
    console.log(cartItems);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      <Cart />
      <DynamicItem />
    </CartContext.Provider>
  );
};

// export const useCart = () => useContext(CartContext);
