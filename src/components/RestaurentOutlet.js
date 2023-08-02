import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurentOutlet = ({ outlet, setBtnOutlet, info }) => {
    
    const { name, cloudinaryImageId } = info?.info;

    const navigate = useNavigate()

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
                            <div className="RestaurantOutlet_headerDescription">{outlet.length} outlets near you</div>
                        </div>
                        <div className="RestaurantOutlet_list">
                            {outlet.map((name) =>(
                                <button className="RestaurantOutlet_listItem" key={name?.id} onClick={() => navigate("/restaurents/" + name?.id)}>
                                    <div className="RestaurantOutlet_listItemTable" onClick={() => window.location.reload(true)}>
                                        <div className="RestaurantOutlet_listItemAddress">{name?.locality}, {name?.area}</div>
                                        <div className="RestaurantOutlet_listItemRatingf">
                                            <span className="RestaurantOutlet_listItemRatingIcon icon-star">★</span>
                                            {name?.avgRatingString}
                                        </div>
                                        <div className="RestaurantOutlet_listItemSLA">{name?.slaString}</div>
                                    </div>
                                </button>)
                            )}
                        </div>
                    </div>
                </div>
                <div className="BaseModal_overlay" onClick={() => setBtnOutlet(false)}></div>
            </div>
        </div>
    )
}

export default RestaurentOutlet;