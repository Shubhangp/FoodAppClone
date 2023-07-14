import React, { useEffect, useState } from "react";
import ReastaurentCard from "./ReastaurentCard";
import OfferCard from "./OfferCard";
import ShimmerHome from "./ShimmerHome";
import MoreShimmerHome from "./MoreShimmerHome";
import UserOffline from "./UserOffline";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import { MAIN_API, PAGE_TYPE, Lat, Lng } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [latestOffer, setLatestOffer] = useState([]);

    const [sortCard, setSortCard] = useState([]);

    const [totalRestaurant, setTotalRestaurant] = useState([]);

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const [sortBy, setSortBy] = useState("RELEVANCE");

    const [btnSort, setBtnSort] = React.useState(true);
    const [btnSort1, setBtnSort1] = React.useState(false);
    const [btnSort2, setBtnSort2] = React.useState(false);
    const [btnSort3, setBtnSort3] = React.useState(false);
    const [btnSort4, setBtnSort4] = React.useState(false);
    
    function handleClickSort(e){
        setBtnSort(true);
        setBtnSort1(false);
        setBtnSort2(false);
        setBtnSort3(false);
        setBtnSort4(false);
        setSortBy(e);
        setListOfRestaurants([]);
    }

    function handleClickSort1(e){
        setBtnSort1(true);
        setBtnSort(false);
        setBtnSort2(false);
        setBtnSort3(false);
        setBtnSort4(false);
        setSortBy(e);
        setListOfRestaurants([]);
    }

    function handleClickSort2(e){
        setBtnSort2(true);
        setBtnSort1(false);
        setBtnSort(false);
        setBtnSort3(false);
        setBtnSort4(false);
        setSortBy(e);
        setListOfRestaurants([]);
    }

    function handleClickSort3(e){
        setBtnSort3(true);
        setBtnSort1(false);
        setBtnSort2(false);
        setBtnSort(false);
        setBtnSort4(false);
        setSortBy(e);
        setListOfRestaurants([]);
    }

    function handleClickSort4(e){
        setBtnSort4(true);
        setBtnSort1(false);
        setBtnSort2(false);
        setBtnSort3(false);
        setBtnSort(false);
        setSortBy(e);
        setListOfRestaurants([]);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
                var data = await fetch(MAIN_API + Lat + Lng + PAGE_TYPE);
                var json = await data.json();
            // console.log(json);
            setLatestOffer(json?.data?.cards[0]?.data?.data?.cards)
            setSortCard(json?.data?.sorts);
            setTotalRestaurant(json?.data?.cards[2]?.data?.data);
            setLoading(false);
        };

        useEffect(() => {
            fetchData1();
        }, [page, sortBy]);

        const fetchData1 = async() => {
            var data1 = await fetch(MAIN_API + Lat + Lng + `&offset=${page}&sortBy=${sortBy}&page_type=DESKTOP_SEE_ALL_LISTING`);
            var json1 = await data1.json();

            // console.log(json1);
            setListOfRestaurants((prev) => [...prev, ...json1?.data?.cards]);

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

    const onlineStatus = useOnlineStatus();

    if(onlineStatus == false)
        return(
            <UserOffline />
    );

    return latestOffer == 0 ? <ShimmerHome />:(
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
                        />
                        <div className="res-container">
                            {listOfRestaurants.map((restaurant) => (<div className="_3XX_A">
                                    <Link
                                        className="card_link"
                                        key={restaurant.data.data.id}
                                        to={"/restaurents/" + restaurant.data.data.id}> 
                                        <ReastaurentCard resObj={restaurant}/> 
                                    </Link>
                                </div>))
                            }
                            {loading && <MoreShimmerHome />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}

export default Body;