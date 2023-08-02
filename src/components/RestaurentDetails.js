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
const RestaurentOutlet = lazy(() => import("./RestaurentOutlet"));
const RestaurentNoOutlet = lazy(() => import("./RestaurentNoOutlet"));
import { useState, useEffect, useContext } from "react";
import UserLocation from "../utils/UserLocation";

const RestaurantDetails = () => {

  
  const { resId } = useParams();
  
  const restaurant = useRestaurent(resId);/* Passing resId to Custom Hooks to fetch restaurant details and returns it */
  
  const [btnVeg, setBtnVeg] = useState(false);

  const [btnSearch, setBtnSearch] = useState(false);

  const [searchText, setSearchText] = useState("");

  const [header, setHeader] = useState(false);

  const [outlet, setOutlet] = useState([]);

  const [btnOutlet, setBtnOutlet] = useState(false);

  const { latitude, longitude } = useContext(UserLocation);

  useEffect(() => {
    fetchOutlet();
  }, [btnOutlet]);

  const fetchOutlet = async () => {
    if(latitude == undefined && longitude == undefined) {
      const response = await fetch(`https://www.swiggy.com/dapi/menu/other-outlets?menuId=${resId}&lat=12.9351929&lng=77.62448069999999`);
      var dataOutlet = await response.json();
    }else{
      const response = await fetch(`https://www.swiggy.com/dapi/menu/other-outlets?menuId=${resId}&lat=${latitude}&lng=${longitude}`);
      var dataOutlet = await response.json();
    }
      
      // console.log(dataOutlet);
      setOutlet(dataOutlet?.data?.otherOutlets);
  }
  
  function vegClick(){
    setBtnVeg(btnVeg => !btnVeg);
  }

  function clickSearch(){
    setBtnSearch(btnSearch => !btnSearch);
    setSearchText("");
  }

  function showOutlet(){
    setBtnOutlet(btnOutlet => !btnOutlet);
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
  console.log(restaurant);

  return (
    <div>
      <div className={btnSearch ? "res-seach" : "res-seach res_search_click"}>
        <Suspense fallback={<h1></h1>}>
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
          <RestaurentInfo info = {restaurant} showOutlet={showOutlet} outlet = {outlet} />
          <RestaurantOffer offer = {restaurant.offer} />
          <RestaurantVegBtn vegClick={vegClick} btnVeg={btnVeg} />
          <RestaurantMenuList menu={restaurant.menu} btnVeg={btnVeg} />
        </div>
      </div>
      { outlet == undefined ? 
        (<div>
          {btnOutlet &&
            <Suspense fallback={<h1></h1>}><RestaurentNoOutlet setBtnOutlet = {setBtnOutlet} info = {restaurant} /></Suspense>}
        </div>)
        :(<div>
          {btnOutlet && 
            <Suspense fallback={<h1></h1>}>
              <RestaurentOutlet outlet = {outlet} setBtnOutlet = {setBtnOutlet} info = {restaurant} />
            </Suspense>}
        </div>)
      }
    </div>
  );
};

export default RestaurantDetails;