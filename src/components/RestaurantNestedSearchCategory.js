import React from "react";
import RestaurentSearchCategory from "./RestaurentSearchCategory";

const RestaurantNestedSearchCategory = ({ nestedCategory }) => {
    return (
        <div>
          {nestedCategory.categories.map((category, index) => (
            <div key={index}>
              <RestaurentSearchCategory searchCategory={category} />
            </div>
          ))}
        </div>
    )
}

export default RestaurantNestedSearchCategory;