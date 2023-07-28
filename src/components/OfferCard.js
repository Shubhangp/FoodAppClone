import React from "react";
import { OFF_URL } from "../utils/constants";

const OfferCard = ({ latestOffer }) => {

    return(
        <div className="offers_layer4">  
            {latestOffer.map((offer) => (
                <div className="img-offers" key={offer?.id}>
                    <img src={OFF_URL + offer?.imageId} alt="" />
                </div>
            ))}
        </div>
    )
}

export default OfferCard;