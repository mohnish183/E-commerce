import React from "react";
import { createContext, useState } from "react";

export const HomeData = createContext();
function Store(props) {
  const [homeData, setHomeData] = useState([
    {
      id: "1",
      img: "../Products/415ELavtbuL._SL1000_.png",
      name: "Air mini",
      category: "mac",
      start: "",
      price: "500$",
    },
    {
      id: "2",
      img: "../Products/52a2df80-98ec-4e1b-9cfc-71a68d7575b3_1.4fbf81e4bfa56bc8feffa82b5b15ca83.png",
      name: "charger",
      category: "Assesories",
      star: "",
      price: "500$",
    },
    {
      id: "3",
      img: "../Products/71fwbMm1NBL._AC_SL1500_.png",
      name: "I watch 6",
      category: "Iwatch",
      star: "",
      price: "500$",
    },
    {
      id: "4",
      img: "../Products/airpods-max-hero-select-202011_FMT_WHH.png",
      name: "Air Pod Max",
      category: "Airpod",
      star: "",
      price: "500$",
    },
    {
      id: "5",
      img: "../Products/Apple Ipad.png",
      name: "Air Pad 6",
      category: "Air Pad",
      star: "",
      price: "500$",
    },
  ]);
  return (
    <div>
      <HomeData.Provider value={{ homeData }}>
        {props.children}
      </HomeData.Provider>
    </div>
  );
}

export default Store;
