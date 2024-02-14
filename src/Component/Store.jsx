import React from "react";
import { createContext, useState, useEffect } from "react";

export const StoreData = createContext();
function Store(props) {
  const [ecomData, setEcomData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://backend-ecomerce-mq1c.onrender.com/api/ecom"
      );
      const res = await result.json();
      setEcomData(res);
    }
    fetchData();
  }, []);

  return (
    <div>
      <StoreData.Provider value={{ ecomData, cartItems, setCartItems }}>
        {props.children}
      </StoreData.Provider>
    </div>
  );
}

export default Store;
