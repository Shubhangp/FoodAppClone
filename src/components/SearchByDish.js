import React from "react";
import { Link } from "react-router-dom";
import vege from "../utils/vege.png";
import nonveg from "../utils/nonveg.png";

const SearchByDish = ({ searchByData }) => {
    // console.log(searchByData);

    return searchByData == undefined? (
        ""
        ):(
        <div className="search_card_dish">
            {searchByData.map((card, index) =>(
                <div  className="Search_widgetsV2__27BBR Search_widgets__3o_bA" key={index}>
                    {card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Dish" ?
                        (<div>
                            <div className="styles_container__2GTLR styles_containerV2__1_U51">
                                <div className="styles_containerInner__2Q_JM styles_containerInnerV2__2yjT5">
                                    <Link to={"/restaurents/" + card?.card?.card?.restaurant?.info?.id} className="styles_restaurant__20fB8">
                                        <div>
                                            <div className="styles_restaurantName__5VIQZ styles_restaurantNameBold__2OmFY">By {card?.card?.card?.restaurant?.info?.name}</div>
                                            <div className="styles_restaurantMeta__2yx7V">
                                                <div>
                                                    <span className="styles_restaurantMetaRatingStar__8olHv icon-star">&#9733;</span>
                                                    <span className="styles_restaurantMetaRating__3MhTg">{card?.card?.card?.restaurant?.info?.avgRatingString}</span>
                                                </div>
                                                <span className="styles_restaurantMetaDot__usB4d"></span>
                                                <div>{card?.card?.card?.restaurant?.info?.sla.slaString}</div>
                                            </div>
                                        </div>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.2307 5.53999C12.9769 5.28615 12.5653 5.28615 12.3115 5.53999C12.0576 5.79383 12.0576 6.20539 12.3115 6.45923L17.2019 11.3496L5.39414 11.3496C5.03516 11.3496 4.74414 11.6406 4.74414 11.9996C4.74414 12.3586 5.03516 12.6496 5.39414 12.6496L17.2019 12.6496L12.3115 17.54C12.0576 17.7938 12.0576 18.2054 12.3115 18.4592C12.5653 18.7131 12.9769 18.7131 13.2307 18.4592L18.949 12.741C19.3584 12.3315 19.3584 11.6677 18.949 11.2583L13.2307 5.53999Z" fill="#868891"></path>
                                        </svg>
                                    </Link>
                                    <div className="styles_divider__3zP03"></div>
                                    <div>
                                        <div className="styles_container__-kShr">
                                            <div className="styles_item__3_NEA styles_hasImage__3OsYt">
                                                <p className="ScreenReaderOnly_screenReaderOnly___ww-V">
                                                    {card?.card?.card?.info?.description}
                                                </p>
                                                <div className="styles_detailsContainer__22vh8">
                                                    <div>
                                                        <i className="styles_icon__m6Ujp styles_itemIcon__1LXTw icon-NonVeg" role="presentation">
                                                            <span className="res_card_img">{card?.card?.card?.info?.isVeg ? (<img src={vege}/>) : (<img src={nonveg}/>)}</span>
                                                        </i>
                                                        <span className="styles_ribbon__3tZ21 styles_itemRibbon__353Fy">
                                                            <span className="styles_ribbonStar__1cZQq icon-star">★ </span>
                                                                BESTSELLER
                                                        </span>
                                                    </div>
                                                    <div className="styles_itemName__hLfgz">
                                                        <h3 className="styles_itemNameText__3ZmZZ">{card?.card?.card?.info?.name}</h3>
                                                    </div>
                                                    <div className="styles_itemPortionContainer__1u_tj">
                                                        <span className="styles_price__2xrhD styles_itemPrice__1Nrpd styles_s__66zLz">
                                                            <span className="rupee">{card?.card?.card?.info?.price/100}</span>
                                                        </span>
                                                    </div>
                                                    <div className="styles_itemDesc__3vhM0 styles_hasMoreText__3fWkR">{card?.card?.card?.info?.description}</div>
                                                    <button className="styles_itemDescButton__3Z6iB">More</button>
                                                </div>
                                                <div className="styles_itemImageContainer__3Czsd">
                                                    <div>
                                                        <button className="styles_itemImage__3CsDL" aria-label="See more information about Biryani">
                                                            <img alt={"Dish Logo"} className="styles_itemImage__3CsDL" loading="lazy" width="256" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${card?.card?.card?.info?.imageId}`} />
                                                        </button>
                                                    </div>
                                                    <div className="styles_itemAddButton">
                                                        <div className="_3L1X9 _2IhbV">
                                                            <div className="_1RPOp">ADD</div>
                                                            <div className="_1ds9T _2WdfZ _4aKW6">+</div>
                                                            <div className="_29Y5Z _20vNm _4aKW6"></div>
                                                            <div className="_2zAXs _2quy- _4aKW6">0</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                        : ("")
                    }
                </div>)
            )}
        </div>
    )
}

export default SearchByDish;