import React from "react";
import { Link } from "react-router-dom";

const AddressRestaurant = (props) => {
    const { info } = props;

    const { name, city } = info?.info;

    return(
        <div className="_2p-Tc _3jpiZ">
            <span>
                <Link to= "/" className="kpkwa">
                    <span className="_3duMr">Home</span>
                </Link>
            </span>
            <span className="_1yRfx"></span>
            <span>
                <Link to= "/" className="kpkwa">
                    <span className="_3duMr">{city}</span>
                </Link>
            </span>
            <span className="_1yRfx"></span>
            <span className="kpkwa resname">{name}</span>
        </div>
    )
}

export default AddressRestaurant;