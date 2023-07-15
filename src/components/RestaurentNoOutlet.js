import React from "react";

const RestaurentNoOutlet = ({ setBtnOutlet, info }) => {

    const { name, cloudinaryImageId } = info?.info;

    return(
        <div id="dialog">
            <div>
                <div className="BaseModal_content BaseModal_content__show">
                    <div>
                        <div className="RestaurantOutlet_header">
                            <div className="RestaurantOutlet_headerImage">
                                <img alt="" className="" height="80" loading="lazy" width="80" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_240,h_240,c_fill/${cloudinaryImageId}`} />
                            </div>
                            <button className="ScreenReaderOnly_screenReaderOnly">Close change outlet modal</button>
                            <div className="RestaurantOutlet_headerTitle">Choose {name} Outlet</div>
                            <div className="RestaurantOutlet_headerDescription">0 outlets near you</div>
                        </div>
                        <div className="RestaurantOutlet_list">
                            <h3>We Serve With Singal Restaurant. No More Outlet</h3>
                        </div>
                    </div>
                </div>
                <div className="BaseModal_overlay" onClick={() => setBtnOutlet(false)}></div>
            </div>
        </div>
    )
}

export default RestaurentNoOutlet;