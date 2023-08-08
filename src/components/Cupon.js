import React, { useEffect, useState } from "react";

const Coupon = ({ handleClose, btnCupon, setSelCupon }) => {

    const [couponNum, setCouponNum] = useState([]);
    const [termShow, setTermShow] = useState(false);

    useEffect(() => {
        fetchData();
    }, [btnCupon]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/offers/payment?lat=12.9351929&lng=77.62448069999999&restaurantId=23678&cart_value=317&restaurant_id=23678&sourcePage=cart&source_page=cart");
        const json = await data.json();
        // console.log(json);
        setCouponNum(json?.data?.cards);
    }

    return (
        <div className={btnCupon ? "not_show_cupon show_cupon" : "not_show_cupon"}>
            <div id="overlay-sidebar-root">
                <div>
                    <div>
                        <div className="FYlIl"></div>
                        <div className="_3vi_e">
                            <div className="_12S7_">
                                <div className="_3btQx">sticky_sentinel sticky_sentinel--top</div>
                                <div className="trfj2 _3RbEL">
                                    <div className="_1L8WG">
                                        <span className="SSFcO"  onClick={() => handleClose()}>
                                            <svg width="19" height="19" viewBox="0 0 24 24">
                                                <path d="M17.0251484,0.288798437 C17.5090218,-0.114571204 18.2292627,-0.0967643175 18.6927565,0.350826444 C19.189357,0.830387975 19.2031698,1.62172366 18.7236083,2.11832416 L18.7236083,2.11832416 L11.274,9.831 L18.7236083,17.5450054 C19.2031698,18.0416059 19.189357,18.8329416 18.6927565,19.3125031 C18.2292627,19.7600939 17.5090218,19.7779007 17.0251484,19.3745311 L16.9252588,19.2816513 L9.537,11.631 L2.14917595,19.2816513 L2.04928636,19.3745311 C1.56541292,19.7779007 0.845172034,19.7600939 0.381678232,19.3125031 C-0.114922271,18.8329416 -0.128735086,18.0416059 0.350826444,17.5450054 L0.350826444,17.5450054 L7.799,9.831 L0.350826444,2.11832416 C-0.128735086,1.62172366 -0.114922271,0.830387975 0.381678232,0.350826444 C0.845172034,-0.0967643175 1.56541292,-0.114571204 2.04928636,0.288798437 L2.14917595,0.381678232 L9.537,8.032 L16.9252588,0.381678232 Z" fill="#535766" fillRule="nonzero" stroke="none" strokeWidth="1"></path>
                                            </svg>
                                        </span>
                                        <div className="_2Joay"></div>
                                    </div>
                                    <form className="Dm4hT">
                                        <div className="_3Um38">
                                            <input className="_381fS _1oTLG _2x3kD" type="text" name="" placeholder="Enter coupon code" maxLength="50" />
                                            <div className="_2EeI1 _26LFr"></div>
                                            <label className="_1Cvlf _2tL9P"></label>
                                        </div>
                                        <a className="_3HIZ1 _3keqX">APPLY</a>
                                    </form>
                                </div>
                                <div className="trfj2 _2tryz">
                                    <div className="_3sxJM">
                                        <div className="_1p3XG">
                                            <h2 className="_1aSpx">Available Coupons</h2>
                                            {couponNum.map((detail, index) =>
                                                <div key={index}>
                                                    { detail.cardType === "couponCardV2" ? 
                                                        (<div className="_1hryr">
                                                            <div className="-QmN-">
                                                                <div>
                                                                    <div>
                                                                        <div className="_3x0ey">
                                                                            <div className="_2fpj9 _2Vb6W">
                                                                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${detail.data.data.logo}`} className="_33BbS" alt="" width="20" height="20" />
                                                                                <span className="_2prG7">{detail.data.data.couponCode}<span className="_3AmpP"></span>
                                                                                    <span className="_3ohAi"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="v0d5B">{detail.data.data.title}</div>
                                                                <div className="mFwvW">{detail.data.data.description}</div>
                                                                <div className="rteNN">
                                                                    <div className="CYLGD QHG0M">
                                                                        <div></div>
                                                                        <div className="_3lKvf">
                                                                            <div className="_2eryw">Terms and Conditions</div>
                                                                            {termShow && <ul className="B9haR">
                                                                                {detail?.data?.data?.tnc?.bulletTexts.map((terms) => (
                                                                                    <li className="_28V8H">{terms}</li>
                                                                                ))}
                                                                            </ul>}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {!termShow && <button className="WybuQ" onClick={() => setTermShow(termShow => !termShow)}><i className="_1BIKz"></i>MORE</button>}
                                                                <div onClick={() => setSelCupon(detail.data.data.couponCode)}>
                                                                    <button className="_1KzVF" onClick={() => handleClose()}>APPLY COUPON</button>
                                                                </div>
                                                            </div>
                                                        </div>)
                                                        : ("")
                                                    }
                                                </div>
                                            )}                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay" onClick={() => handleClose()}></div>
        </div>
    )
}

export default Coupon;