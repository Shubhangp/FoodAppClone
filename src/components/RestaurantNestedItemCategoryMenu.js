import { useState } from "react";
import RestaurentMenuItem from "./RestaurentMenuItem";
import RestaurentVegMenuItem from "./RestaurentVegMenuItem";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const RestaurantNestedItemCategoryMenu = ({ itemCategory, btnVeg }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="main_container">
      <button className="styles_header">
        <h3 onClick={toggleView} className="styles_headerTitle">
          {itemCategory.title} ({ btnVeg ? (itemCategory.itemCards.length) : (itemCategory.itemCards.length) })
        </h3>
        {isVisible ? (
          <SlArrowUp onClick={toggleView} className="cursor-pointer"/>
        ) : (
          <SlArrowDown onClick={toggleView} className="cursor-pointer" />
        )}
      </button>
      <div class={isVisible ? "styles_divider styles_dividerFull" : "styles_divider" }></div>
      {isVisible && (
        <div>
          {itemCategory.itemCards.map((item) => (<div key={item.card.info.id}>
              { btnVeg ?
                (<RestaurentVegMenuItem item={item.card.info} />)
                : (<RestaurentMenuItem item={item.card.info} />)
              }
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantNestedItemCategoryMenu;