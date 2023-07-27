import React from "react";
import { OFF_URL } from "../utils/constants";

const OfferCard = (props) => {
    const { resOff } = props;

    const { imageId } = resOff

    return(
        <div className="img-offers">
                <img src={OFF_URL + imageId} alt="" />
        </div>
    )
}

export default OfferCard;