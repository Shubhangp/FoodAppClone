import React from "react";

const RestaurantVegBtn = ({ vegClick, btnVeg }) => {

    let btnVegCheck = btnVeg ? " ToggleSwitch_toggleThumbActive__3hBTE" : "";

    let btnVegBack = btnVeg ? " ToggleSwitch_toggleBar" : "";

    return(
        <div>
            <div className="styles_container__28Awf styles_topMargin__2wPNf">
                <div className="styles_vegOnly__3k3n5">
                    <div className="styles_vegOnlyLabel__HR3Ii">Veg Only</div>
                    <button className="styles_vegOnlyFilter__3ODDm" role="switch" onClick={() => vegClick()}>
                        <span className={`ToggleSwitch_toggleBar__1peIy${btnVegBack}`}>
                            <span className={`ToggleSwitch_toggleThumb__NBLuA${btnVegCheck}`}>
                                <span className="ToggleSwitch_toggleThumbContent__33ZU6">
                                    <span className="styles_vegOnlyCircle__3UQr3"></span>
                                </span>
                            </span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="styles_divider__1BqVH"></div>
        </div>
    )
}

export default RestaurantVegBtn;