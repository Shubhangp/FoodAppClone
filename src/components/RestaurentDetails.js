import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import useRestaurent from "../utils/useRestaurent"
const RestaurentSearchByDish = lazy(() => import("./RestaurentSearchByDish"));
import AddressRestaurant from "./AddressRestaurant";
import RestaurantMenuHeader from "./RestaurantMenuHeader";
import RestaurentInfo from "./RestaurentInfo";
import RestaurantOffer from "./RestaurantOffer";
import RestaurantVegBtn from "./RestaurantVegBtn";
import ShimmerRestaurantPage from "./ShimmerRestaurantPage";
import RestaurantMenuList from "./RestaurantMenuList";
import { useState } from "react";

const RestaurantDetails = () => {

  
  const { resId } = useParams();
  
  const restaurant = useRestaurent(resId);/* Passing resId to Custom Hooks to fetch restaurant details and returns it */
  
  // console.log(restaurant);
  
  const [btnVeg, setBtnVeg] = useState(false);

  const [btnSearch, setBtnSearch] = useState(false);

  const [searchText, setSearchText] = useState("");

  const [header , setHeader] = useState(false);
  
    function vegClick(){
      setBtnVeg(btnVeg => !btnVeg);
  }

  function clickSearch(){
    setBtnSearch(btnSearch => !btnSearch);
    setSearchText("");
  }

  const changeHeader = () => {
    if (document.documentElement.scrollTop >= 10) {
        setHeader(true);
    }else{
        setHeader(false);
    }
  }

  window.addEventListener('scroll', changeHeader);
  
  if(restaurant == null) return <ShimmerRestaurantPage />;
  // console.log(restaurant);

  return (
    <div>
      <div className={btnSearch ? "res-seach" : "res-seach res_search_click"}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <RestaurentSearchByDish 
            clickSearch={clickSearch} 
            menu={restaurant.menu} 
            info = {restaurant.info} 
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </Suspense>
      </div>
      <div  className={btnSearch ? "container res_search_click" : "container"}>
        <AddressRestaurant info = {restaurant} />
        <div>
          <RestaurantMenuHeader info = {restaurant} clickSearch={clickSearch} header = {header} />
          <RestaurentInfo info = {restaurant} />
          <RestaurantOffer offer = {restaurant.offer} />
          <RestaurantVegBtn vegClick={vegClick} btnVeg={btnVeg} />
          <RestaurantMenuList menu={restaurant.menu} btnVeg={btnVeg} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;