import React from "react";
import "../ComponentUI/Navbar.css";
import Home from "./Home";
import Store from "./Store";
import Macbook from "./Macbook";
import Ipad from "./Ipad";
import Iphone from "./Iphone";
import Accessories from "./Accessories";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function NavBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/macbook"} element={<Macbook />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/store"} element={<Store />} />

        <Route path={"/iphone"} element={<Iphone />} />
        <Route path={"/ipad"} element={<Ipad />} />
        <Route path={"/accessories"} element={<Accessories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;

// function NavBarHeader() {
//   return (
//     <>
//       <NavLink to={"/"}>Home</NavLink>
//       <div className="logo">
//         <img src={logo} />
//       </div>
//       <div className="nav-bar">
//         <NavLink to={"/"}>Home</NavLink>
//         <NavLink to={"/store"}> store</NavLink>
//         <NavLink to={"/macbook"}>Macbook</NavLink>
//         <NavLink to={"/iphone"}>Iphone</NavLink>
//         <NavLink to={"/ipad"}>Ipad</NavLink>
//         <NavLink to={"/accessories"}>Accessories</NavLink>
//       </div>
//     </>
//   );
// }

// export { NavBarHeader };
