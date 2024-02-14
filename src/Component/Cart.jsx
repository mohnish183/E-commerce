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
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreData } from "./Store";
function Cart() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [storeItem, setStoreItem] = useState([]);
  const CartItem = useContext(StoreData);
  console.log(CartItem);
  console.log(CartItem.ecomData);
  console.log(CartItem.cartItems);
  const { id } = useParams(); // Get id from route parameters

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      navigate("/login");
    } else {
      axios
        .get("https://backend-ecomerce-mq1c.onrender.com/pages/dashboard", {
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

  useEffect(() => {
    // Update storeItem when id changes
    setStoreItem((prevItems) => [...prevItems, id]);
  }, [id]);

  console.log(storeItem);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{message}</p>
      {CartItem.ecomData
        .filter((item, index) => {
          return CartItem.cartItems.includes(item.id);
        })
        .map((item, index) => {
          return (
            <>
              <img src={item.img} alt="not found" />

              <h1>{item.name}</h1>
              <h6>{item.price}</h6>
              <h6>{item.rating}</h6>
            </>
          );
        })}
    </div>
  );
}

export default Cart;
