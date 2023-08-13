import { useState, useEffect, useContext } from "react";
import { MENU_API } from "./constants";
import UserLocation from "./UserLocation";

const useRestaurent = (resId) => {
  const [restaurant, setRestaurant] = useState(null); 

  const { latitude, longitude } = useContext(UserLocation);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      if(latitude == undefined && longitude == undefined) {
        var response = await fetch(MENU_API + resId);
        var res_data = await response.json();
      }else{
        var response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=` + resId);
        var res_data = await response.json();
      }
      const menuItemsList = res_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

      const menu = menuItemsList.map(item => {
        if((item.card.card["@type"] === itemCategory) || (item.card.card["@type"] === NestedItemCategory) ) {
          return item.card.card;
        }
      })

      const modifiedData = {
        info : res_data.data.cards[0].card.card.info,
        offer: res_data.data.cards[1].card.card.gridElements.infoWithStyle.offers,
        menu : menu.filter(value => value !== undefined)
      };

      // console.log(modifiedData);

      setRestaurant(modifiedData)
    } catch (error) {
      console.log(error);
    }
  };

  return restaurant;

}

export default useRestaurent;