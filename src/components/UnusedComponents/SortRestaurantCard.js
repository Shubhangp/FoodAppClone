import React from "react";
import { CDN_URL } from "../utils/constants";
import QuickView from "./QuickView";

const SortRestaurantCard = (props) => {
    const { resObj } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString } = resObj?.data

    return(<div>
            <div className="res-card">
                <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
                <div className="all-details">
                    <h3>{name}</h3>
                    <span className="cuisines">{cuisines.join(", ")}</span>
                    <div className="res-details">
                        <div className="rating">&#9733; {avgRating}</div>
                        <div>.</div>
                        <div>{slaString}</div>
                        <div>.</div>
                        <div>{costForTwoString}</div>
                    </div>
                </div>
                <QuickView />
            </div>
        </div>
    )
}

export default SortRestaurantCard;