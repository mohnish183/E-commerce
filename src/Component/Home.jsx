import React, { useContext } from "react";
import "../ComponentUI/Home.css";
import Car_img1 from "../miscellaneous/corousel_1.png";
import Car_img2 from "../miscellaneous/corousel_2.png";
import Car_img3 from "../miscellaneous/corousel_3.png";
import { NavLink } from "react-router-dom";

import { HomeCarousel } from "./Carousel";
function Home() {
  let Car_image2 = [Car_img1, Car_img2, Car_img3];

  return (
    <div>
      <div className="heading">
        <h2>Best Seller</h2>
      </div>
      <div className="nav-option">
        <NavLink>All</NavLink>
        <NavLink>Mac</NavLink>
        <NavLink>IPhone</NavLink>
        <NavLink>IPad</NavLink>
        <NavLink>IPod</NavLink>
        <NavLink>Accessories</NavLink>
      </div>
      <HomeCarousel image2={Car_image2} />
    </div>
  );
}

export default Home;
