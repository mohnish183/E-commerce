import React from "react";
import img1 from "../Web/apple-carousel.jpg";
import img2 from "../Web/apple-carousel1.webp";
import img3 from "../Web/apple-carousel2.jpg";
import Carousel from "./Carousel";
import { StoreData } from "./Store";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../ComponentUI/Ipad.css";
function Ipad() {
  const ipadData = useContext(StoreData);
  let images = [img1, img2, img3];
  return (
    <div>
      <Carousel images={images} />
      <div className="ipad__container">
        <div className="ipad_data_container">
          {ipadData.ecomData
            .filter((item, index) => item.category === "ipad")
            .map((item, index) => {
              return (
                <>
                  <div className="ipad_item_container">
                    <div className="ipad_item-img">
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

export default Ipad;
