import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import RestaurantNestedItemCategoryMenu from "./RestaurantItemCategory";


const RestaurantNestedItemCategory = ({ nestedCategory }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg cursor-pointer" onClick={toggleView}>
          {nestedCategory.title}
        </h3>
      </div>
      {isVisible && (
        <div>
          {nestedCategory.categories.map((category, index) => (
            <div key={index}>
              <RestaurantNestedItemCategoryMenu itemCategory={category} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurantNestedItemCategory;