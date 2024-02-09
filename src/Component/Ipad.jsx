import React from "react";
import { StoreData } from "./Store";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../ComponentUI/Ipad.css";
function Ipad() {
  const ipadData = useContext(StoreData);
  return (
    <div>
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
