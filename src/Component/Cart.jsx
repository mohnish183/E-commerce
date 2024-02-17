// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// function Cart() {
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("");
//   const [storeItem, setStoreItem] = useState([]);
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     console.log(token);

//     if (!token) {
//       navigate("/login");
//     } else {
//       axios
//         .get("http://localhost:8000/pages/dashboard", {
//           headers: {
//             authorization: `Bearer ${token}`,
//           },
//         })
//         .then((res) => {
//           const responseData = res.data;
//           alert(responseData.msg);
//           setMessage(responseData.msg);
//         });
//     }
//   }, [navigate]);

//   // store item
//   const id = useParams().id;
//   // storeItem.push(id);
//   setStoreItem(id);
//   console.log(storeItem);
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Cart;

import React, { useEffect, useState } from "react";
import "../ComponentUI/Cart.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreData } from "./Store";

function Cart() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [itemCounts, setItemCounts] = useState({});
  let [cartItemArray, setCartItemArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const CartItem = useContext(StoreData);
  console.log(CartItem);
  console.log(CartItem.ecomData[6].price);
  console.log(CartItem.cartItems);
  cartItemArray = CartItem.cartItems;
  console.log(cartItemArray);
  //Get id from route parameters
  const increaseItemCount = (productId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
    setTotalPrice(
      totalPrice +
        parseInt(CartItem.ecomData[productId - 1].price.replaceAll(",", ""))
    );
    console.log(itemCounts);
  };
  const deccreaseItemCount = (productId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: prevCounts[productId] - 1,
    }));
    setTotalPrice(
      totalPrice -
        parseInt(CartItem.ecomData[productId - 1].price.replaceAll(",", ""))
    );
    console.log(itemCounts);
  };
  const removeItem = (productId) => {
    // const index = CartItem.cartItems.indexOf(productId);
    const index = cartItemArray.indexOf(productId);
    // CartItem.cartItems.splice(index, 1);
    cartItemArray.splice(index, 1);
    setCartItemArray(cartItemArray);
    setTotalPrice(
      totalPrice -
        itemCounts[productId] *
          parseInt(CartItem.ecomData[productId - 1].price.replaceAll(",", ""))
    );
    console.log(cartItemArray);
  };
  // remove items
  // useEffect(() => {
  //   removeItem();
  // }, [CartItem.cartItems]);

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handlePayment = () => {
    setPaymentCompleted(true);

    // Reset payment completion after 3 seconds
    setTimeout(() => {
      setPaymentCompleted(false);
      console.log("first");
      setTimeout(() => {
        navigate("/");
        console.log("second");
      }, 1000);
      setTimeout(() => {
        // CartItem.cartItems = [];
        setCartItemArray([]);
      }, 4000);
    }, 6000);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      navigate("/login");
    } else {
      axios
        .get("https://backend-ecom-zrif.onrender.com/pages/dashboard", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const responseData = res.data;
          alert(responseData.msg);
          setMessage(responseData.msg);
        });
    }
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{message}</p>
      <div className="cart_container">
        <div className="cart_item_block">
          {CartItem.ecomData
            .filter((item, index) => {
              // return CartItem.cartItems.includes(item.id);
              return cartItemArray.includes(item.id);
            })
            .map((item, index) => {
              return (
                <>
                  <div className="data-item">
                    <div className="cart_img">
                      <img src={item.img} alt="not found" />
                    </div>
                    <div className="cart_txt">
                      <h1>{item.name}</h1>
                      <h6>{item.price}</h6>
                      <h6>{item.rating}</h6>
                    </div>
                    <button onClick={() => removeItem(item.id)}>
                      Remove Item
                    </button>
                    <button onClick={() => increaseItemCount(item.id)}>
                      Increase
                    </button>
                    <button onClick={() => deccreaseItemCount(item.id)}>
                      Decrease
                    </button>
                    <span className="item-count">
                      {itemCounts[item.id] || 0}
                    </span>
                  </div>
                </>
              );
            })}
        </div>
        <div className="cart_item_checkout">
          <h1>Checkout Product</h1>
          <h4>Total Price{totalPrice}</h4>
          <button onClick={handlePayment}>Complete Payment</button>
          {paymentCompleted && (
            <div className="payment-animation">Payment Completed!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
