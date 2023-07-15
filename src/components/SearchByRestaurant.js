import React from "react";
import { Link } from "react-router-dom";

const SearchByRestaurant = ({ searchByRes }) => {

    // console.log(searchByRes);

    return(<div className="search_card_res">
            {searchByRes.map((card) => (
                <div className="Search_widgetsV2__27BBR Search_widgets__3o_bA" key={card?.card?.card?.info?.id}>
                    <div className="styles_container__zEwGm">
                        <div className="styles_restaurantListItem__1lOsF">
                            <Link className="styles_container__fLC0R" to={"/restaurents/" + card?.card?.card?.info?.id} role="button">
                                <div className="styles_imgContainer__1uHo5">
                                    <div className="styles_ImageContainer__2rk9a">
                                        <img alt="" className="styles_Image__1fplJ" loading="lazy" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${card?.card?.card?.info?.cloudinaryImageId}`} />
                                    </div>
                                </div>
                                <div className="styles_containerRestaurant__3vhx3">
                                    <div className="styles_containerImageBadge__14fk3">
                                        <div className="styles_restaurantName__29jAP">{card?.card?.card?.info?.name}</div>
                                    </div>
                                    <div className="styles_restaurantMeta__2QtMf">
                                        <div>
                                            <span className="styles_restaurantMetaRatingStar__7G4dD icon-star">&#9733;</span>
                                            <span className="styles_restaurantMetaRating__4H1gt">{card?.card?.card?.info?.avgRatingString}</span>
                                        </div>
                                        <span className="styles_restaurantMetaDot__1AKA9"></span>
                                        <div>{card?.card?.card?.info?.sla?.slaString}</div>
                                        <span className="styles_restaurantMetaDot__1AKA9"></span>
                                        <div>{card?.card?.card?.info?.costForTwoMessage}</div>
                                    </div>
                                    <div className="styles_restaurantCuisines__3lBL4">
                                        <span>{card?.card?.card?.info?.cuisines.join(", ")}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>)
            )}
        </div>
    )
}

export default SearchByRestaurant;