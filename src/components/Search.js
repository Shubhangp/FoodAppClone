import React, { useEffect, useState, useContext } from "react";
import SearchByPopularCui from "./SearchByPopularCui";
import SearchSuggest from "./SearchSuggest";
import SearchBy from "./SearchBy";
import UserLocation from "../utils/UserLocation";

const Search = () => {

    const [popularCusi, setPopularCusi] = useState([]);
    const [searchApi, setSearchApi] = useState(["1"]);
    const [searchText, setSearchText] = useState("");
    const [searchByApi, setSearchByApi] = useState([]);
    const [searchByData, setSearchByData] = useState([]);
    const [searchByRes, setSearchByRes] = useState([]);

    const { latitude, longitude } = useContext(UserLocation);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        var data = await fetch(`https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=${latitude}&lng=${longitude}`);
        const json = await data.json();
        // console.log(json);

        setPopularCusi(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    }
    // console.log(popularCusi);

    useEffect(() => {
        fetchSearchData();
    }, [searchText])

    const fetchSearchData = async() => {
        var dataSearch = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${latitude}&lng=${longitude}&str=${searchText}&trackingId=undefined`);
        const json = await dataSearch.json();
        // console.log(json);

        setSearchApi(json?.data?.suggestions);
    }
    // console.log(searchApi);

    useEffect(() => {
        fetchSearchBy();
    }, [searchByApi])

    const fetchSearchBy = async() => {
        var dataSearchBy = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${latitude}&lng=${longitude}&str=${searchText}&trackingId=undefined&submitAction=SUGGESTION&${searchByApi}`);
        const json = await dataSearchBy.json();
        // console.log(json);

        setSearchByData(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
    }
    // console.log(searchByData);

    useEffect(() => {
        fetchSearchByRes();
    }, [searchByApi])

    const fetchSearchByRes = async() => {
        var dataSearchByRes = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${latitude}&lng=${longitude}&str=${searchText}&trackingId=undefined&submitAction=SUGGESTION&${searchByApi}&selectedPLTab=RESTAURANT`);
        const json = await dataSearchByRes.json();
        // console.log(json);

        setSearchByRes(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
    }
    // console.log(searchByRes);

    function suggestionClick(e){
        setSearchByApi(e[1]);
    }

    // Popular Cuisine Search

    function selectClick(e){
        setSearchText(e);
    }

    function backClick(){
        setSearchText("");
        setSearchByData(undefined);
    }

    return(
        <div className="nDVxx">
            <div className="rbcmH">
                <div className="_1JbgW _1jet9">
                    <form>
                        <div className="_1QBzC">
                            {searchByData == undefined ? ("") :
                                (<div className="_38OJP _2EyGE" onClick={() => backClick()}>
                                    <svg className="_16EzP" viewBox="0 0 22 24" height="20" width="20">
                                        <path d="M16.7806341,2.29035615 C17.3106478,1.84800244 18.0989073,1.91906491 18.541261,2.4490786 C18.9541245,2.94375805 18.9197454,3.66339831 18.4824058,4.11680172 L18.3825386,4.20970553 L9.2,11.8720308 L18.3310359,19.4913284 C18.8257555,19.9041438 18.9207068,20.6183204 18.5715601,21.142665 L18.4899294,21.2519399 C18.077114,21.7466594 17.3629373,21.8416107 16.8385928,21.4924641 L16.7293179,21.4108334 L6.44914097,12.8326086 C5.88775027,12.3641599 5.85262408,11.5262778 6.34379605,11.011602 L6.44904776,10.9131814 L16.7806341,2.29035615 Z" fill="#535766"></path>
                                    </svg>
                                </div>)
                            }
                            <div className="_2O4-3">
                                <input 
                                    type="text"
                                    className="_2FkHZ"
                                    placeholder="Search for restaurants and food"
                                    maxLength="200" autoFocus=""
                                    value={searchText}
                                    key="input-text"
                                    onChange = {(e) => setSearchText(e.target.value)}
                                />
                            </div>
                            {searchText == "" ? 
                                (<div className="_2p8XD">
                                    <span className="icon-magnifier">
                                        <svg className="_1GTCc" viewBox="5 -1 12 25" height="17" width="17" fill="#686b78">
                                            <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
                                        </svg>
                                    </span>
                                </div>)
                                : ("")
                            }
                            {searchText == "" ? ("")
                                :(<button onClick={() => setSearchText("")}>
                                    <div class="_3XUKB">
                                        <span class="jBKjW">
                                            <svg width="19" height="19" viewBox="0 0 24 24">
                                                <path d="M17.0251484,0.288798437 C17.5090218,-0.114571204 18.2292627,-0.0967643175 18.6927565,0.350826444 C19.189357,0.830387975 19.2031698,1.62172366 18.7236083,2.11832416 L18.7236083,2.11832416 L11.274,9.831 L18.7236083,17.5450054 C19.2031698,18.0416059 19.189357,18.8329416 18.6927565,19.3125031 C18.2292627,19.7600939 17.5090218,19.7779007 17.0251484,19.3745311 L16.9252588,19.2816513 L9.537,11.631 L2.14917595,19.2816513 L2.04928636,19.3745311 C1.56541292,19.7779007 0.845172034,19.7600939 0.381678232,19.3125031 C-0.114922271,18.8329416 -0.128735086,18.0416059 0.350826444,17.5450054 L0.350826444,17.5450054 L7.799,9.831 L0.350826444,2.11832416 C-0.128735086,1.62172366 -0.114922271,0.830387975 0.381678232,0.350826444 C0.845172034,-0.0967643175 1.56541292,-0.114571204 2.04928636,0.288798437 L2.14917595,0.381678232 L9.537,8.032 L16.9252588,0.381678232 Z" fill="#535766" fillRule="nonzero" stroke="none" strokeWidth="1"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </button>)
                            }
                        </div>
                    </form>
                </div>
            </div>
            <div className="_2NSqs">
                <div className="_3X3Bt _13h-R">
                    { searchByData == undefined ? ("") :
                        (<SearchBy searchByData={searchByData} searchByRes={searchByRes} />)
                    }
                    { searchText == "" || searchByData != undefined ? ("") :
                        (<div className="_1VxLu">
                            <SearchSuggest searchApi={searchApi} suggestionClick={suggestionClick}/>
                        </div>)
                    }
                    <div className="Search_wrapper__lQvnw _1cEc4">
                        { searchText == "" && searchByData == undefined ?
                            (<SearchByPopularCui popularCusi={popularCusi} selectClick={selectClick}/>)
                            : ("")
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;