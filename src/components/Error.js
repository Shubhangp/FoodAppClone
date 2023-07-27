import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div class="GenericError__container">
            <div class="GenericError__content">
                <div class="GenericError__image"></div>
                <div class="GenericError__title">We'll be back shortly</div>
                <div class="GenericError__description">
                    We are fixing a temporary glitch. Sorry for the inconvenience.
                </div>
                <Link to={"/"} class="GenericNotFound__btn">Go Back</Link>
            </div>
        </div>
    )
}

export default Error;