import { useState } from "react";
import RestaurentMenuItem from "./RestaurentMenuItem";
import RestaurentVegMenuItem from "./RestaurentVegMenuItem";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const RestaurantItemCategory = ({ itemCategory, btnVeg }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="main_container">
      <button className="styles_header styles_headerMain">
        <h3 onClick={toggleView} className="styles_headerNestedTitle">
          {itemCategory.title} ({ btnVeg ? (itemCategory.itemCards.length) : (itemCategory.itemCards.length) })
        </h3>
        {isVisible ? (
          <SlArrowUp onClick={toggleView} className="cursor-pointer"/>
        ) : (
          <SlArrowDown onClick={toggleView} className="cursor-pointer" />
        )}
      </button>
      {isVisible && (
        <div>
          {itemCategory.itemCards.map((item, index) => (<div key={item.card.info.id}>
              { btnVeg ?
                (<RestaurentVegMenuItem item={item.card.info} />)
                : (<RestaurentMenuItem item={item.card.info} itemLength = {itemCategory.itemCards.length} index = {index} />)
              }
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantItemCategory