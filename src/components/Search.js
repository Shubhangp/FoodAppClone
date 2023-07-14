import React, { useEffect, useState } from "react";
import SearchByPopularCui from "./SearchByPopularCui";
import SearchSuggest from "./SearchSuggest";
import SearchBy from "./SearchBy";

const Search = () => {

    const [popularCusi, setPopularCusi] = useState([]);
    const [searchApi, setSearchApi] = useState(["1"]);
    const [searchText, setSearchText] = useState();
    const [searchByApi, setSearchByApi] = useState([]);
    const [searchByData, setSearchByData] = useState([]);
    const [searchByRes, setSearchByRes] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        var data = await fetch("https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.9351929&lng=77.62448069999999");
        const json = await data.json();
        // console.log(json);

        setPopularCusi(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    }
    // console.log(popularCusi);

    useEffect(() => {
        fetchSearchData();
    }, [searchText])

    const fetchSearchData = async() => {
        var dataSearch = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9351929&lng=77.62448069999999&str=${searchText}&trackingId=undefined`);
        const json = await dataSearch.json();
        // console.log(json);

        setSearchApi(json?.data?.suggestions);
    }
    // console.log(searchApi);

    useEffect(() => {
        fetchSearchBy();
    }, [searchByApi])

    const fetchSearchBy = async() => {
        var dataSearchBy = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9351929&lng=77.62448069999999&str=${searchText}&trackingId=undefined&submitAction=SUGGESTION&${searchByApi}`);
        const json = await dataSearchBy.json();
        // console.log(json);

        setSearchByData(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
    }
    // console.log(searchByData);

    useEffect(() => {
        fetchSearchByRes();
    }, [searchByApi])

    const fetchSearchByRes = async() => {
        var dataSearchByRes = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9351929&lng=77.62448069999999&str=${searchText}&trackingId=undefined&submitAction=SUGGESTION&${searchByApi}&selectedPLTab=RESTAURANT`);
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

    return(
        <div className="nDVxx">
            <div className="rbcmH">
                <div className="_1JbgW _1jet9">
                    <form>
                        <div className="_1QBzC">
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
                            <div className="_2p8XD">
                                <span className="icon-magnifier">
                                    <svg className="_1GTCc" viewBox="5 -1 12 25" height="17" width="17" fill="#686b78">
                                        <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <input type="submit" hidden />
                    </form>
                </div>
            </div>
            <div className="_2NSqs">
                <div className="_3X3Bt _13h-R">
                    { searchByData == undefined ? ("") :
                        (<SearchBy searchByData={searchByData} searchByRes={searchByRes} />)
                    }
                    { searchText == undefined ? ("") :
                        (<div className="_1VxLu">
                            <SearchSuggest searchApi={searchApi} suggestionClick={suggestionClick}/>
                        </div>)
                    }
                    <div className="Search_wrapper__lQvnw _1cEc4">
                        { searchText == undefined ?
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