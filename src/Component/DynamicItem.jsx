import React from "react";
import "../ComponentUI/DynamicCompo.css";
import { StoreData } from "./Store";
import { useContext } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
function DynamicItem() {
  const id = useParams().id;
  const navigate = useNavigate();
  const dynamicItemData = useContext(StoreData);
  // const addToCart = useContext(CartContext);
  const handleBackBtn = () => {
    navigate(-1);
  };
  const handleAddCart = (itemId) => {
    console.log("hello");
    dynamicItemData.cartItems.push(itemId);
    console.log(dynamicItemData.cartItems);
  };

  return (
    <div>
      <div className="dynamicItem__container">
        <div className="dynamicItem_data_container">
          {dynamicItemData.ecomData
            .filter((item, index) => index === parseInt(id) - 1)
            .map((item, index) => {
              let style;
              if (item.category === "mac") {
                style = {
                  width: "30vw",
                  height: "40vh",
                };
              }
              return (
                <>
                  <div className="dynamicItem_item_container">
                    <div className="dynamicItem_item-img">
                      <img src={item.img} style={style} alt="not found" />
                    </div>
                    <h1>{item.name}</h1>
                    <h6>{item.price}</h6>
                    <h6>{item.rating}</h6>
                    <div className="btn-cart">
                      <button onClick={handleBackBtn} className="back_btn">
                        Back
                      </button>
                      <button
                        onClick={() => handleAddCart(item.id)}
                        className="add_btn"
                      >
                        Add Cart
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>

      <div className="dynamic_scroll_flex_container">
        {dynamicItemData.ecomData
          .filter(
            (item, index) => index > parseInt(id) && index <= parseInt(id) + 3
          )
          .map((item, index) => {
            let style;
            if (item.category === "mac") {
              style = {
                width: "20vw",
                height: "30vh",
              };
            }
            return (
              <>
                <div className="dynamic_scroll_item">
                  <div className="dynamicItem_item-img">
                    <NavLink to={`/item/${item.id}`}>
                      <img src={item.img} style={style} alt="not found" />
                    </NavLink>
                  </div>
                  <div className="dynamicItem_txt">
                    <h1>{item.name}</h1>
                    <h6>{item.price}</h6>
                    <h6>{item.rating}</h6>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default DynamicItem;
