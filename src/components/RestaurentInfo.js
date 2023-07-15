import React from 'react';
import { AiFillStar } from "react-icons/ai";

const RestaurantInfo = (props) => {
    const { info, showOutlet } = props;

    // console.log(info.info);
    
    const { name, cuisines, areaName, sla, avgRatingString, totalRatingsString, costForTwoMessage, feeDetails } = info?.info;

    return (
        <div className='RestaurantHeader_container'>
            <div className='RestaurantHeader_wrapper'>
                <div className='RestaurantNameAddress_wrapper'>
                    <div>
                        <p className='RestaurantNameAddress_name'>{name}</p>
                        <p className='RestaurantNameAddress_cuisines'>{cuisines.join(", ")}</p>
                    </div>
                    <div className='RestaurantNameAddress_areaWrapper'>
                        <p className='RestaurantNameAddress_area'>{areaName}</p>
                        <p className='RestaurantNameAddress_lastMile'>{sla.lastMileTravelString}</p>
                        <div className="RestaurantOutletSelector_wrapper">
                            <button className="RestaurantOutletSelector_address">
                                <span className="RestaurantOutletSelector_outletIcon" onClick={() => showOutlet()}>▾</span>
                            </button>
                        </div>
                    </div>
                </div>
                <button className="RestaurantRatings_wrapper">
                    <span className='RestaurantRatings_avgRating'>
                        <span className='icon_star'>★</span>
                        <span> {avgRatingString}</span>
                    </span>
                    <span className='RestaurantRatings_totalRatings'>{totalRatingsString}</span>
                </button>
            </div>
            <ul>
                <li className="RestaurantMessage_wrapper">
                    {feeDetails?.icon ?
                        (<img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/${feeDetails?.icon}`} alt="" className="RestaurantMessage_icon" />)
                        : ("")
                    }
                    <span className="RestaurantMessage_text">{feeDetails?.message} Total Delivery Fee: {feeDetails?.totalFee/100}</span>
                </li>
            </ul>
            <hr className="RestaurantHeader_dottedSeparator"></hr>
            <div className='RestaurantHeader_marginBottom'>
                <ul className='RestaurantTimeCost_wrapper'>
                    <li className='RestaurantTimeCost_item'>
                        <svg className="RestaurantTimeCost_icon" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" strokeWidth="1.3"></circle>
                            <path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path>
                        </svg>
                        <span>{sla.slaString} </span>
                    </li>
                    <li className='RestaurantTimeCost_item'>
                        <svg className="RestaurantTimeCost_icon" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <circle cx="9" cy="9" r="8.25" stroke="#3E4152" strokeWidth="1.5"></circle>
                            <path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path>
                        </svg>
                        <span>{costForTwoMessage}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default RestaurantInfo;