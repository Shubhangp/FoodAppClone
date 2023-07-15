import React from "react";
import RestaurantNestedItemCategoryMenu from "./RestaurantNestedItemCategoryMenu";


const RestaurantNestedItemCategory = ({ nestedCategory, btnVeg }) => {

  
  return (
    <div className="main_container">
      <div className="styles_header styles_headerMain ">
        <h3 className="styles_headerNestedTitle">
          {nestedCategory.title}
        </h3>
      </div>
      <div>
        {nestedCategory.categories.map((category, index) => (
          <div key={index}>
            <RestaurantNestedItemCategoryMenu itemCategory={category} btnVeg={btnVeg} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantNestedItemCategory;