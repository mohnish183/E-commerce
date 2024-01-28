import React from "react";
import "../ComponentUI/Navbar.css";
import logo from "../Web/iSHOP Logo.svg";
import { BrowserRouter, NavLink } from "react-router-dom";
function NavBarHeader() {
  return (
    <div>
      <div className="logo">
        <img src={logo} />
      </div>
      <BrowserRouter>
        <div className="nav-bar">
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"/store"}> store</NavLink>
          <NavLink to={"/macbook"}>Macbook</NavLink>
          <NavLink to={"/iphone"}>Iphone</NavLink>
          <NavLink to={"/ipad"}>Ipad</NavLink>
          <NavLink to={"/accessories"}>Accessories</NavLink>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default NavBarHeader;
