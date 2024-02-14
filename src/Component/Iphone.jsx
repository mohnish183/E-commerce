import React from "react";
import img1 from "../Web/apple-carousel.jpg";
import img2 from "../Web/apple-carousel1.webp";
import img3 from "../Web/apple-carousel2.jpg";
import Carousel from "./Carousel";
import { StoreData } from "./Store";
import { useContext } from "react";
import "../ComponentUI/Iphone.css";
import { NavLink } from "react-router-dom";
function Iphone() {
  const iphoneData = useContext(StoreData);
  let images = [img1, img2, img3];
  return (
    <div>
      <Carousel images={images} />
      <div className="iphone__container">
        <div className="iphone_data_container">
          {iphoneData.ecomData
            .filter((item, index) => item.category === "iphone")
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
    </div>
  );
}

export default Iphone;
