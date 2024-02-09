import React from "react";
import "../ComponentUI/Navbar.css";
import logo from "../miscellaneous/iSHOP Logo.png";
import { NavLink } from "react-router-dom";
function NavBarHeader() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="problem" />
      </div>

      <div className="nav-bar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/watch"}> Watch</NavLink>
        <NavLink to={"/macbook"}>Macbook</NavLink>
        <NavLink to={"/iphone"}>Iphone</NavLink>
        <NavLink to={"/ipad"}>Ipad</NavLink>
        <NavLink to={"/accessories"}>Accessories</NavLink>
      </div>
    </div>
  );
}

export default NavBarHeader;
