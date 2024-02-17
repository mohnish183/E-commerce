import React from "react";
import "../ComponentUI/Home.css";
import Car_img1 from "../miscellaneous/corousel_1.png";
import Car_img2 from "../miscellaneous/corousel_2.png";
import Car_img3 from "../miscellaneous/corousel_3.png";
import support from "../miscellaneous/support.png";
import shipping from "../miscellaneous/shipping.png";
import refund from "../miscellaneous/refund.png";
import img1 from "../Web/apple-carousel.jpg";
import img2 from "../Web/apple-carousel1.webp";
import img3 from "../Web/apple-carousel2.jpg";

import { NavLink } from "react-router-dom";
import { HomeCarousel } from "./Carousel";
import Carousel from "./Carousel";
import { useState, useContext } from "react";
import { StoreData } from "./Store";

function Home() {
  const dataItem = useContext(StoreData);
  console.log(dataItem);
  let arr = [];
  arr = dataItem.ecomData.filter((item, index) => item.rating === "⭐⭐⭐⭐⭐");
  console.log(arr);
  let Car_image2 = [Car_img1, Car_img2, Car_img3];
  const [name, setName] = useState("mac");
  const setItemName = (name) => {
    setName(name);
  };
  let images = [img1, img2, img3];
  return (
    <div>
      {" "}
      <Carousel images={images} />
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
      <div className="home__container">
        <div className="home_data_container">
          {arr
            .filter((item, index) => item.category === name)
            .map((item, index) => {
              let style = {};
              window.addEventListener("resize", (e) => {
                if (window.matchMedia(`(max-width:600px)`).matches) {
                  if (item.category === "mac") {
                    style = { width: "5vw", height: "5vh" };
                  }
                }
              });
              // if (item.category === "mac") {
              //   style = { width: "20vw", height: "30vh" };

              // }
              return (
                <>
                  <div className="home_item_container">
                    <div className="home_item-img">
                      <NavLink to={`/item/${item.id}`}>
                        {" "}
                        <img src={item.img} style={style} alt="not found" />
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
      <div className="home_support_flex_container">
        <div className="home_support_container">
          <div className="support">
            <div className="heading_txt">
              {" "}
              <h4>Support</h4>
            </div>

            <div className="support_img">
              {" "}
              <img src={support} alt="not found" />
            </div>
            <div className="support_txt">
              {" "}
              <h6>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h6>
            </div>
          </div>
          <div className="shipping">
            <div className="heading_txt">
              <h4>Shipping</h4>
            </div>
            <div className="support_img">
              <img src={shipping} alt="not found" />
            </div>

            <div className="support_txt">
              {" "}
              <h6>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h6>
            </div>
          </div>
          <div className="refund">
            <div className="heading_txt">
              <h4>Refund</h4>
            </div>
            <div className="support_img">
              <img src={refund} alt="not found" />
            </div>

            <div className="support_txt">
              {" "}
              <h6>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
