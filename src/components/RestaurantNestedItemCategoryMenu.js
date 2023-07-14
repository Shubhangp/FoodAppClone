import { useState } from "react";
import RestaurentMenuItem from "./RestaurentMenuItem";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const RestaurantNestedItemCategoryMenu = ({ itemCategory }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div >
        <h3 onClick={toggleView}>
          {itemCategory.title} ({itemCategory.itemCards.length})
        </h3>
        {isVisible ? (
            <SlArrowDown onClick={toggleView} className="cursor-pointer" />
            ) : (
            <SlArrowUp onClick={toggleView} className="cursor-pointer" />
            )}
      </div>
      {isVisible && (
        <div>
          {itemCategory.itemCards.map((item) => (
            <RestaurentMenuItem key={item.id} item={item.card.info} />
          ))}
        </div>
        )} 
    </div>
  );
};

export default RestaurantNestedItemCategoryMenu;