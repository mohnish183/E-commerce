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
  var navBar = document.getElementsByClassName("nav-bar");
  var childNode;

  let toggleValue = true;
  const toggleMenu = () => {
    if (toggleValue === true) {
      navBar[0].classList.add("childnodeOn");

      console.log("red");
      navBar[0].classList.remove("childnodeOff");
      childNode = navBar[0].children;
      for (var i = 0; i < childNode.length; i++) {
        childNode[i].classList.add("childNodeDisplay");
        childNode[i].classList.remove("childNode");
      }
      toggleValue = false;
    } else {
      navBar[0].classList.remove("childnodeOn");
      navBar[0].classList.add("childnodeOff");
      childNode = navBar[0].children;
      for (i = 0; i < childNode.length; i++) {
        childNode[i].classList.add("childNode");
        childNode[i].classList.remove("childNodeDisplay");
      }
      toggleValue = true;
    }
  };
  window.addEventListener("resize", (e) => {
    if (window.matchMedia(`(min-width: 600px)`).matches) {
      navBar[0].classList.remove("childnodeOff");
      navBar[0].classList.remove("childnodeOn");
      childNode = navBar[0].children;
      for (var i = 0; i < childNode.length; i++) {
        childNode[i].classList.remove("childNode");
        childNode[i].classList.remove("childNodeDisplay");
      }
    }
    if (window.matchMedia(`(max-width:600px)`).matches) {
      navBar[0].classList.add("childnodeOff");
    }
  });
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
      <div className="icon">
        <i className="fa fa-bars" onClick={toggleMenu}></i>
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
