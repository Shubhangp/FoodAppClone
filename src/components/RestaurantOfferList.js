import React from "react";
import { OFFER_IMG } from "../utils/constants";

const RestaurantOfferList = (props) => {

    const { offerlist } = props;

    // console.log(offerlist);

    return(<div  className="styles_row">
            {offerlist.map((offer) => (
                <div className="styles_slide" key={offer.info.offerIds[0]}>
                    <button className="RestaurantOffer_wrapper">
                        <div className="RestaurantOffer_container">
                            <div className="RestaurantOffer_infoWrapper">
                                <div className="RestaurantOffer_headerWrapper">
                                    <img src={OFFER_IMG + offer.info.offerLogo} className="RestaurantOffer_icon" alt="" />
                                    <p className="RestaurantOffer_header">{offer.info.header}</p>
                                </div>
                                <div className="RestaurantOffer_offerCodeWrapper">
                                    <span>{offer.info.couponCode}</span>
                                    <span className="RestaurantOffer_description">{offer.info.description}</span>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default RestaurantOfferList;