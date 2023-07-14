import React, { useState } from "react";
import SearchByDish from "./SearchByDish";
import SearchByRestaurant from "./SearchByRestaurant";

const SearchBy = ({ searchByData, searchByRes}) => {

    const [btnContain, setBtnContain] = useState("Dishes");

    function handlerClick(e){
        setBtnContain(e);
    }

    let btnActiveDish = btnContain == "Dishes" ? " NavTab_tabSelected__2B4GW" : "";

    let btnActiveRest = btnContain == "Restaurents" ? " NavTab_tabSelected__2B4GW" : "";

    return(
        <div className="Search_wrapper__lQvnw _3_gGY _3jBq8">
            <div className="Search_widgetsV2__27BBR Search_widgets__3o_bA Search_widgetsFullLength__2lPs9">
                <div className="NavTabs_wrapper__1me4c _3DdnR NavTabs_wrapperScrolled__10HRt">
                    <span>
                        <span className={`styles_container__1ieVH styles_size-sm__1emwv styles_variant-default__2VzW8 styles_rounded__3IerS styles_canClick__16iph NavTab_tab__1JygM${btnActiveRest}`} role="button">
                            <span  onClick={() => handlerClick("Restaurents")}>Restaurants</span>
                        </span>
                    </span>
                    <span>
                        <span className={`styles_container__1ieVH styles_size-sm__1emwv styles_variant-default__2VzW8 styles_rounded__3IerS styles_canClick__16iph NavTab_tab__1JygM${btnActiveDish}`} role="button">
                            <span  onClick={() => handlerClick("Dishes")}>Dishes</span>
                        </span>
                    </span>
                </div>
            </div>
            { btnContain == "Dishes" ?
                (<SearchByDish searchByData={searchByData} />) :
                (<SearchByRestaurant searchByRes={searchByRes} />)
            }
        </div>
    )
}

export default SearchBy;