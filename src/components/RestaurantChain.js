import React from "react";
import { Link } from "react-router-dom";

const RestaurantChain = ({ chainRes }) => {

    return(
        <div className="sc-BrFsL sc-fjqEFS lidxXy laKjiC">
            <div>
                <div className="sc-hKpBwk cUjjjg">
                    <div className="sc-djUGQo cKmNa-d">
                        <button className="sc-hjQCSK ftUdSb">
                            <div className="sc-jhzXDd sc-bSakgD OBHoC cOMcyj">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)">
                                    <path d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z" fill="rgba(2, 6, 12, 0.92)" fillOpacity="0.92"></path>
                                </svg>
                            </div>
                        </button>
                        <button className="sc-hjQCSK iOOXDE">
                            <div className="sc-jhzXDd OBHoC">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)">
                                    <path d="M10.5164 3.43418C10.1934 3.13273 9.68714 3.15022 9.3857 3.47324C9.08425 3.79626 9.10174 4.30249 9.42476 4.60394L12.9012 7.84819C13.04 7.97772 13.1626 8.09234 13.2709 8.19527L2.89142 8.19527C2.44959 8.19527 2.09142 8.55344 2.09142 8.99527C2.09142 9.4371 2.44959 9.79527 2.89142 9.79527L13.3186 9.79527C13.1988 9.90964 13.0607 10.0388 12.9012 10.1877L9.46718 13.3924C9.14416 13.6939 9.12668 14.2001 9.42813 14.5231C9.72958 14.8462 10.2358 14.8636 10.5588 14.5622L14.0304 11.3224C14.4386 10.9415 14.8033 10.6012 15.0586 10.2874C15.3364 9.94598 15.5684 9.5378 15.5684 9.01793C15.5684 8.49807 15.3363 8.08989 15.0586 7.74849C14.8033 7.43463 14.4386 7.09437 14.0304 6.71354L10.5164 3.43418Z" fill="rgba(2, 6, 12, 0.92)" fillOpacity="0.92"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="sc-iAvgwm ebepUu">
                        <div className="sc-cTQhss iMCsYC">
                            <div className="sc-jOrMOR jveqan">
                                <h2 className="sc-bczRLJ kPlrlF title">{chainRes?.header?.title}</h2>
                                <div className="sc-bczRLJ kmpvrg"></div>
                            </div>
                        </div>
                        <div className="sc-efBctP bGaJhO">
                            <div className="row">
                                {chainRes?.gridElements?.infoWithStyle?.restaurants.map((chain) =>
                                    <div className="sc-dPyBCJ fJKDKr" key={chain.info.id}>
                                        <div>
                                            <Link to={"/restaurents/" + chain.info.id} className="sc-hZgfyJ ctdOAV">
                                                <div className="sc-eFWqGp bbYjZD">
                                                    <div className="sc-dmRaPn gxjPtO">
                                                        <div className="sc-kgflAQ cGeVnN">
                                                            <div width="100%" height="100%" className="sc-dIouRR yUTwf">
                                                                <img className="sc-hKMtZM ehLqCq" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${chain.info.cloudinaryImageId}`} alt="Nandhana Palace" />
                                                                <div className="sc-bjUoiL dParKm sc-hHLeRK cKlryb">
                                                                    <div className="sc-bczRLJ cEaOWD sc-idiyUo ltTmN"></div>
                                                                    <div className="sc-bczRLJ RWjhp sc-idiyUo ltTmN">  </div>
                                                                    <div className="sc-bczRLJ eMRGdv sc-idiyUo ltTmN"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ddtvss">
                                                        <div>
                                                            <div className="sc-bczRLJ gWiXXg">{chain.info.name}</div>
                                                        </div>
                                                        <div className="sw-restaurant-card-subtext-container">
                                                            <div className="star_dd">
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)">
                                                                    <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                                                                    <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path>
                                                                    <defs>
                                                                        <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                                                            <stop stop-color="#21973B"></stop>
                                                                            <stop offset="1" stop-color="#128540"></stop>
                                                                        </linearGradient>
                                                                    </defs>
                                                                </svg>
                                                            </div>
                                                            <div className="sc-bczRLJ cSxxDX">
                                                                <span className="sc-bczRLJ bCUVQi">4.1</span>
                                                            </div>
                                                        </div>
                                                        <div className="sw-restaurant-card-descriptions-container">
                                                            <div className="sc-bczRLJ kRLpy">{chain.info.cuisines.join(', ')}</div>
                                                            <div className="sc-bczRLJ kRLpy">{chain.info.areaName}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantChain;