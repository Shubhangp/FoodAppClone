import React, { useEffect, useState } from "react";
import ShimmerRestaurantPage from "./ShimmerRestaurantPage";

const LocationSearch = ({ handleClick, btnLocation }) => {

    const [searchLocation, setSearchLocation] = useState("");

    const [place, setPlace] = useState([]);

    const [placeId, setPlaceId] = useState("");

    const [latlng, setLatlng] = useState([]);

    useEffect(() => {
        fetchData();
    }, [searchLocation]);

    const fetchData = async () => {
        var data = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${searchLocation}&types=`);
        var json = await data.json();
        // console.log(json);

        setPlace(json?.data);
    }
    // console.log(place);

    useEffect(() => {
        fetchLatLog();
    }, [placeId]);

    const fetchLatLog = async () => {
        var latLogData = await fetch (`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placeId}`);
        var latJson = await latLogData.json();
        // console.log(latJson);
        if(placeId != "") {
            setLatlng(latJson?.data[0]?.geometry?.location);
        }
    }
    // console.log(latlng);

    const selectClick = (e) => {
        setPlaceId(e);
    }

    return(
        <div className={btnLocation ? "not_show_loction show_loction" : "not_show_loction"}>
            <div id="overlay-sidebar-root">
                <div>
                    <div>
                        <div className="FYlIl"></div>
                        <div className="_3vi_e">
                            <div className="_12S7_">
                                <div className="_1YLwL">
                                    <div className="_3btQx">
                                        sticky_sentinel sticky_sentinel--top
                                    </div>
                                    <div className="_djr34 _3RbEL">
                                        <div className="_1L8WG">
                                            <div onClick={() => handleClick()}>
                                                <span className="SSFcO icon-close"></span>
                                            </div>
                                            <div className="_2Joay"></div>
                                        </div>
                                        <div className="_1hjIq">
                                            <div className="_3Um38 ">
                                                <input 
                                                    className="_381fS _1oTLG _1H_62" 
                                                    type="text" name="" 
                                                    placeholder="Search for area, street name.."
                                                    value={searchLocation}
                                                    key="input-text"
                                                    onChange = {(e) => setSearchLocation(e.target.value)} 
                                                />
                                                    <div className="_2EeI1 _26LFr"></div>
                                                <label className="_1Cvlf _2tL9P"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_1boND">
                                        {place == undefined || place.length == 0 ? ("")                                        
                                           : (<div>
                                                {place.map((plac) => (
                                                    <div onClick={() => selectClick(plac.place_id)}>
                                                        <div className="_2peD4 _2peD45">
                                                            <div className="J80xC">
                                                                <div className="icon-location">&#128681;</div>
                                                                <div className="_3eFzL">
                                                                    <div className="Ku2oK">{plac.terms[0].value}</div>
                                                                    <div className="_1joFh">
                                                                        {plac.terms[1].value} {plac.terms.length >= 3 ? ( plac.terms[2].value) : "" } {plac.terms.length == 4 ? ( plac.terms[3].value) : "" }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>)
                                                )}
                                            </div>)
                                        }
                                        {place == undefined || place.length == 0 ?
                                            (<div>
                                                <div className="_96hVG">
                                                    <div className="_2peD4">
                                                        <div className="J80xC">
                                                            <div className="icon-location-crosshair _13AY4"></div>
                                                            <div className="_3eFzL">
                                                                <div className="Ku2oK">
                                                                    Get current location
                                                                </div>
                                                                <div className="_1joFh">
                                                                    Using GPS
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="undefined _96hVG">
                                                    <div className="_1-cF7">
                                                        RECENT SEARCHES
                                                    </div>
                                                    <div className="_2peD4">
                                                        <div className="J80xC">
                                                            <div className="icon-recent _13AY4 _fgrt4"></div>
                                                            <div className="_3eFzL">
                                                                <div className="Ku2oK">
                                                                    Koramangala
                                                                </div>
                                                                <div className="_1joFh">
                                                                    Bengaluru, Karnataka, India
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                            : ("")
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
        )
}

export default LocationSearch;