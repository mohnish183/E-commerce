import React from "react";
import "../ComponentUI/Navbar.css";
import Home from "./Home";
import Store from "./Store";
import Macbook from "./Macbook";
import Ipad from "./Ipad";
import Iphone from "./Iphone";
import Accessories from "./Accessories";
import { Route, Routes } from "react-router-dom";
import Watch from "./Watch";
import DynamicItem from "./DynamicItem";

function NavBar() {
  return (
    <Store>
      <Routes>
        <Route path={"/macbook"} element={<Macbook />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/watch"} element={<Watch />} />

        <Route path={"/iphone"} element={<Iphone />} />
        <Route path={"/ipad"} element={<Ipad />} />
        <Route path={"/accessories"} element={<Accessories />} />
        <Route path={`/macbook/:id`} element={<DynamicItem />} />
        <Route path={`/watch/:id`} element={<DynamicItem />} />
        <Route path={`/iphone/:id`} element={<DynamicItem />} />
        <Route path={`/ipad/:id`} element={<DynamicItem />} />
        <Route path={`/accessories/:id`} element={<DynamicItem />} />
      </Routes>
    </Store>
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
