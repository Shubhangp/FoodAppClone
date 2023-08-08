import { useState } from "react";
import RestaurentMenuItem from "./RestaurentMenuItem";
import RestaurentVegMenuItem from "./RestaurentVegMenuItem";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const RestaurantItemCategory = ({ itemCategory, btnVeg, info }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  const menu = itemCategory.itemCards.map((item) => {
    if(item.card.info.itemAttribute.vegClassifier === "VEG"){
      return(item.card.info.itemAttribute.vegClassifier)
    }
  })

  const lengthmenu = menu.filter(value => value !== undefined)

  const menu1 = itemCategory.itemCards.map((item) => {
    if(item.card.info.itemAttribute.vegClassifier === "NONVEG"){
      return(item.card.info.itemAttribute.vegClassifier)
    }
  })

  const lengthindex = menu1.filter(value => value !== undefined)

  return (
    <div className="main_container">
      <button className="styles_header styles_headerMain">
        <h3 onClick={toggleView} className="styles_headerNestedTitle">
          {itemCategory.title} ({ btnVeg ? (lengthmenu.length) : (itemCategory.itemCards.length) })
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
                (<RestaurentVegMenuItem item={item.card.info} info={info} itemLength = {lengthmenu.length} index = {index - lengthindex.length} />)
                : (<RestaurentMenuItem item={item.card.info} info={info} itemLength = {itemCategory.itemCards.length} index = {index} />)
              }
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantItemCategory