import React from "react";
import RestaurentSearchMap from "./RestaurentSearchMap";

const RestaurentSearchCategory = ({ searchCategory, searchText }) => {
  // console.log(searchCategory);

    return(
        <div className="main_container">
          {searchCategory.itemCards.map((item) => (
            <div key={item.card.info.id}>
              {item?.card?.info.name.toLowerCase().includes(searchText) ?
                (<RestaurentSearchMap item={item.card.info} />)
                : ("")
              }
            </div>
          ))}
        </div>
    )
}

export default RestaurentSearchCategory;