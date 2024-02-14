import React from "react";
import "../ComponentUI/Navbar.css";
import logo from "../miscellaneous/iSHOP Logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { LogOut } from "./Login";
function NavBarHeader() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="problem" />

        <div className="register-part">
          <NavLink to={`/login`}>
            <FontAwesomeIcon
              className="fa-nav"
              icon={faUser}
              style={{ color: "#ff3333" }}
              size="2x"
            />
          </NavLink>

          <NavLink to={`/register`}>
            {" "}
            <FontAwesomeIcon
              className="fa-nav"
              icon={faHouse}
              style={{ color: "#ff3333" }}
              size="2x"
            />
          </NavLink>
          <NavLink to={`/dashboard`}>
            <FontAwesomeIcon
              className="fa-nav"
              icon={faCartShopping}
              style={{ color: "#ff3333" }}
              size="2x"
            />
          </NavLink>
          <LogOut />
        </div>

        {/* <NavLink>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            style={{ color: "#ff3333" }}
          />
        </NavLink> */}
      </div>
      <hr />
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
