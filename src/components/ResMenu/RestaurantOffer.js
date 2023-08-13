import React from "react";
import RestaurantOfferList from "./RestaurantOfferList";

const RestaurantOffer = (props) => {

    const { offer } = props;
    // console.log(offer);

    return(
        <div>
            <div className="offer-slide">
                <div className="styles_slider">
                    <RestaurantOfferList offerlist = {offer} />
                </div>
            </div>
        </div>
    )
}

export default RestaurantOffer;