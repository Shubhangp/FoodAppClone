import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LocationSearch = ({ handleClick, btnLocation, setLatlng, setPlaceName }) => {

    const [searchLocation, setSearchLocation] = useState("");

    const [place, setPlace] = useState([]);

    const [placeId, setPlaceId] = useState("");

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

    const selectClick = (e) => {
        setPlaceId(e.place_id);
        setPlaceName(e.structured_formatting)
        setSearchLocation("");
    }

    const navigate = useNavigate();

    const handleRender = () => {
        navigate("/help");
        setTimeout(() => {
            navigate("/")
        }, 100)
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
                                                <span className="SSFcO icon-close">
                                                    <svg width="19" height="19" viewBox="0 0 24 24">
                                                        <path d="M17.0251484,0.288798437 C17.5090218,-0.114571204 18.2292627,-0.0967643175 18.6927565,0.350826444 C19.189357,0.830387975 19.2031698,1.62172366 18.7236083,2.11832416 L18.7236083,2.11832416 L11.274,9.831 L18.7236083,17.5450054 C19.2031698,18.0416059 19.189357,18.8329416 18.6927565,19.3125031 C18.2292627,19.7600939 17.5090218,19.7779007 17.0251484,19.3745311 L16.9252588,19.2816513 L9.537,11.631 L2.14917595,19.2816513 L2.04928636,19.3745311 C1.56541292,19.7779007 0.845172034,19.7600939 0.381678232,19.3125031 C-0.114922271,18.8329416 -0.128735086,18.0416059 0.350826444,17.5450054 L0.350826444,17.5450054 L7.799,9.831 L0.350826444,2.11832416 C-0.128735086,1.62172366 -0.114922271,0.830387975 0.381678232,0.350826444 C0.845172034,-0.0967643175 1.56541292,-0.114571204 2.04928636,0.288798437 L2.14917595,0.381678232 L9.537,8.032 L16.9252588,0.381678232 Z" fill="#535766" fillRule="nonzero" stroke="none" strokeWidth="1"></path>
                                                    </svg>
                                                </span>
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
                                                    <div onClick={() => selectClick(plac)} key={plac.place_id}>
                                                        <div className="_2peD4 _2peD45" onClick={() => handleRender()}>
                                                            <div className="J80xC" onClick={() => handleClick()}>
                                                                <div className="icon-location">&#128681;</div>
                                                                <div className="_3eFzL">
                                                                    <div className="Ku2oK">{plac.terms[0].value}</div>
                                                                    <div className="_1joFh">
                                                                        {plac.terms.length >= 2 ? (plac.terms[1].value) : ("")} {plac.terms.length >= 3 ? (plac.terms[2].value) : ("") } {plac.terms.length == 4 ? ( plac.terms[3].value) : ("") }
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
            <div className="overlay" onClick={() => handleClick()}></div>
        </div>
        )
}

export default LocationSearch;