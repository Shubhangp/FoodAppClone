import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import ReastaurentCard from "./ReastaurentCard";
import { MAIN_API, Lat, Lng } from "../utils/constants";

const Collection = () => {

    const [listOfCollections, setListOfCollections] = useState([]);

    const [sortCard, setSortCard] = useState([]);

    const [loading, setLoading] = useState(true);

    const [totalRestaurant, setTotalRestaurant] = useState([]);

    const [sortBy, setSortBy] = useState("RELEVANCE");
    
    const [page, setPage] = useState(0);

    const [btnSort, setBtnSort] = useState(true);
    const [btnSort1, setBtnSort1] = useState(false);
    const [btnSort2, setBtnSort2] = useState(false);
    const [btnSort3, setBtnSort3] = useState(false);
    const [btnSort4, setBtnSort4] = useState(false);
    
    function handleClickSort(e){
        setBtnSort(true);
        setBtnSort1(false);
        setBtnSort2(false);json?.data?.cards[0]
        setBtnSort3(false);
        setBtnSort4(false);
        setSortBy(e);
        setListOfCollections([]);
    }

    function handleClickSort1(e){
        setBtnSort1(true);
        setBtnSort(false);
        setBtnSort2(false);
        setBtnSort3(false);
        setBtnSort4(false);
        setSortBy(e);
        setListOfCollections([]);
    }

    function handleClickSort2(e){
        setBtnSort2(true);
        setBtnSort1(false);
        setBtnSort(false);
        setBtnSort3(false);
        setBtnSort4(false);
        setSortBy(e);
        setListOfCollections([]);
    }

    function handleClickSort3(e){
        setBtnSort3(true);
        setBtnSort1(false);
        setBtnSort2(false);
        setBtnSort(false);
        setBtnSort4(false);
        setSortBy(e);
        setListOfCollections([]);
    }

    function handleClickSort4(e){
        setBtnSort4(true);
        setBtnSort1(false);
        setBtnSort2(false);
        setBtnSort3(false);
        setBtnSort(false);
        setSortBy(e);
        setListOfCollections([]);
    }

    useEffect(() => {
        fetchData1();
    }, [page, sortBy]);

    const fetchData1 = async() => {
        var data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83649&offset=0&type=rcv2&page_type=DESKTOP_WEB_LISTING");
        var json = await data.json();
        console.log(json);
        // setSortCard(json?.data?.sorts);
        // setTotalRestaurant(json?.data?.cards[2]?.data?.data);
        // setListOfCollections((prev) => [...prev, ...json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
        // setLoading(false);
    }

    // console.log(sortReastaurent);

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
        }, []);

    const handelInfiniteScroll = async () => {
        // console.log("scrollHeight" + document.documentElement.scrollHeight);
        // console.log("innerHeight" + window.innerHeight);
        // console.log("scrollTop" + document.documentElement.scrollTop);
        try {
            if (
            872 + document.documentElement.scrollTop >=
            document.documentElement.scrollHeight
            ) {
            setLoading(true);
            setPage((prev) => prev + 16);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="_3pFoM _29kDH">
                <div className="_1LV_f">
                    <div className="_10p2-">
                        {/* <Filter 
                            sort={sortCard} 
                            totalRestaurant={totalRestaurant} 
                            handleClickSort={handleClickSort}
                            handleClickSort1={handleClickSort1} 
                            handleClickSort2={handleClickSort2}
                            handleClickSort3={handleClickSort3}
                            handleClickSort4={handleClickSort4}
                            btnSort={btnSort}
                            btnSort1={btnSort1}
                            btnSort2={btnSort2}
                            btnSort3={btnSort3}
                            btnSort4={btnSort4}
                        /> */}
                        {/* <div className="res-container">
                            {listOfCollections.map((restaurant) => (<div className="_3XX_A">
                                    <Link
                                        className="card_link"
                                        key={restaurant.info.id}
                                        to={"/restaurents/" + restaurant.info.id}
                                    >
                                        <ReastaurentCard resObj={restaurant} />
                                    </Link>
                                </div>))
                            }
                            {loading && <MoreShimmerHome />}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection;