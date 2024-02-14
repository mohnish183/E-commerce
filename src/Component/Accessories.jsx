import React from "react";
import { StoreData } from "./Store";
import { useContext } from "react";
import img1 from "../Web/apple-carousel.jpg";
import img2 from "../Web/apple-carousel1.webp";
import img3 from "../Web/apple-carousel2.jpg";
import Carousel from "./Carousel";
import "../ComponentUI/Accessories.css";
import { NavLink } from "react-router-dom";
function Accessories() {
  const accData = useContext(StoreData);
  console.log(accData);
  let images = [img1, img2, img3];
  return (
    <div>
      <Carousel images={images} />
      <div className="acc__container">
        <div className="acc_data_container">
          {accData.ecomData
            .filter((item, index) => item.category === "accessories")
            .map((item, index) => {
              return (
                <>
                  <div className="acc_item_container">
                    <div className="acc_item-img">
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

export default Accessories;
