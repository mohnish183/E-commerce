import React from "react";
import "../ComponentUI/Home.css";
import Car_img1 from "../miscellaneous/corousel_1.png";
import Car_img2 from "../miscellaneous/corousel_2.png";
import Car_img3 from "../miscellaneous/corousel_3.png";
import { NavLink } from "react-router-dom";
import { HomeCarousel } from "./Carousel";
import { useState, useContext } from "react";
import { StoreData } from "./Store";

function Home() {
  const dataItem = useContext(StoreData);
  console.log(dataItem);
  let arr = [];
  arr = dataItem.ecomData.filter((item, index) => item.rating === "⭐⭐⭐⭐⭐");
  console.log(arr);
  let Car_image2 = [Car_img1, Car_img2, Car_img3];
  const [name, setName] = useState("");
  const setItemName = (name) => {
    setName(name);
  };
  return (
    <div>
      <div className="heading">
        <h2>Best Seller</h2>
      </div>
      <div className="nav-option">
        <NavLink onClick={() => setItemName("mac")}>Mac</NavLink>
        <NavLink onClick={() => setItemName("iphone")}>IPhone</NavLink>
        <NavLink onClick={() => setItemName("ipad")}>IPad</NavLink>
        <NavLink onClick={() => setItemName("watch")}>Watch</NavLink>
        <NavLink onClick={() => setItemName("accessories")}>
          Accessories
        </NavLink>
      </div>
      <div className="iphone__container">
        <div className="iphone_data_container">
          {arr
            .filter((item, index) => item.category === name)
            .map((item, index) => {
              return (
                <>
                  <div className="iphone_item_container">
                    <div className="iphone_item-img">
                      <NavLink to={`${item.id}`}>
                        {" "}
                        <img src={item.img} alt="not found" />
                      </NavLink>
                    </div>
                    <h1>{item.name}</h1>
                    <h6>{item.price}</h6>
                    <h6>{item.rating}</h6>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <HomeCarousel image2={Car_image2} />
    </div>
  );
}

export default Home;
