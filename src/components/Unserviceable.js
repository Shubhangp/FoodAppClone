import React from "react";

const Unserviceable = () => {
    return(
        <div class="GenericError__container">
            <div>
                <div class="GenericError__content">
                    <div class="GenericError__image_un">
                        <img class="sc-hKMtZM gXNoYr" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png" width="238" height="238" alt="location unservicable image" />
                    </div>
                    <div class="GenericError__title">Location Unserviceable</div>
                    <div class="GenericError__description">We don’t have any services here till now. Try changing location.</div>
                </div>
            </div>
        </div>
    )
}

export default Unserviceable;