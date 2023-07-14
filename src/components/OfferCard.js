import React from "react";
import { OFF_URL } from "../utils/constants";

const OfferCard = (props) => {
    const { resOff } = props;

    const { creativeId } = resOff?.data

    return(
        <div className="img-offers">
                <img src={OFF_URL + creativeId} alt="" />
        </div>
    )
}

export default OfferCard;