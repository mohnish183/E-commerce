import React from "react";
import { StoreData } from "./Store";
import { useContext } from "react";
import { useParams } from "react-router-dom";
function DynamicItem() {
  const id = useParams().id;
  console.log(id);
  const dynamicItemData = useContext(StoreData);
  return (
    <div>
      <div className="dynamicItem__container">
        <div className="dynamicItem_data_container">
          {dynamicItemData.ecomData
            .filter((item, index) => index === parseInt(id))
            .map((item, index) => {
              return (
                <>
                  <div className="dynamicItem_item_container">
                    <div className="dynamicItem_item-img">
                      <img src={item.img} alt="not found" />
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

export default DynamicItem;
