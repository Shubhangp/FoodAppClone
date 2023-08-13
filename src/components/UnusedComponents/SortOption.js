import React, { useEffect, useState } from "react";
import Shimmer from "./ShimmerHome";
import OfferCard from "./OfferCard";
import Filter from "./Filter";
import SortRestaurantCard from "./SortRestaurantCard";
import { SORT, MAIN_API, PAGE_TYPE} from "../utils/constants";
import { Link } from "react-router-dom";

const SortOption = () => {



    const [sortReastaurent, setSortReastaurent] =  useState([]);

    const [latestOffer] = useState([]);

    const [totalRestaurant] = useState([]);

    const [sortCard] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
            var data = await fetch(MAIN_API + SORT + PAGE_TYPE);
            const json = await data.json();
            console.log(json);

            setSortReastaurent(json?.data?.cards[0]?.data?.data?.cards);
        };

    return sortReastaurent.length == 0? (
        <Shimmer />
        ):(
        <div className="body">
            <div className="offers">
                <div className="offers_layer1">
                    <div className="offers_layer2">
                        <div className="offers_layer3">
                            <div className="offers_layer4">  
                                {
                                    latestOffer.map((offer) => (
                                        <OfferCard key={offer.data.bannerId} resOff={offer}/>
                                    ))
                                }
                            </div>
                        </div>
                        <button className="btn_cr btn_prev">
                            <i className="icon-prev">&#x2794;</i>
                        </button>
                        <button className="btn_cr btn_next">
                            <i className="icon-next">&#x2794;</i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="_3pFoM _29kDH">
                <div className="_1LV_f">
                    <div className="_10p2-">
                        <Filter 
                            sort={sortCard} 
                            totalRestaurant={totalRestaurant} 
                        />
                        <div className="res-container">
                            {
                            sortReastaurent.map((restaurant) => (<Link
                                className="card_link"
                                key={restaurant.data.id}
                                to={"/restaurents/" + restaurant.data.id}> 
                                <SortRestaurantCard resObj={restaurant}/> 
                                </Link>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}

export default SortOption;