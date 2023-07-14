import React from "react";
import { CDN_URL } from "../utils/constants";
import QuickView from "./QuickView";

const ReastaurentCard = (props) => {
    const { resObj } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString } = resObj?.data?.data

    return(<div>
            <div className="res-card">
                <div className="_3FR5S">
                    <div className="efp8s">
                        <img className="res-logo _12_oN" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
                    </div>
                    <div className="_3Ztcd">
                        <div className="nA6kb">{name}</div>
                        <span className="cuisines">{cuisines.join(", ")}</span>
                    </div>
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

export default ReastaurentCard;