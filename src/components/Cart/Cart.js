import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "../../redux_utilis/cartSlice";
import Coupon from "./Cupon";
import offer from "../../utils/offer.svg";
import info from "../../utils/info.svg";
import location from "../../utils/location.svg";
import wallet from "../../utils/wallet.svg";
import CartItem from "./CartItem";

const Cart = () => {

    const navigate = useNavigate();
    const [selCupon, setSelCupon] = useState("");
    const [btnCupon, setBtnCupon] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [tPrice, setTPrice] = useState([]);
    console.log(tPrice);
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleCheckOut = () => {
        dispatch(clearCart());
    }

    function handleClose(){
        setBtnCupon(btnCupon => !btnCupon);
    }

    return(
        <div className="cupon">
            {cartItems.length != 0 ?
                (<div className="nDVxx _340-t">
                    <div className="_3-bcQ">
                        <div className="_3djal">
                            <div>
                                <div className="_1rwo5 _1Ak49 _34Whq">
                                    <div className="F8Sye">
                                        <div className="_2YrH-">Delivery address</div>
                                        <div className="C2lmo _3za0v">
                                            <div className="_2C3aj _1eJQw">
                                                <span className="_1ZSwS">&#10003;</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_2zPJt">
                                        <div className="_1IPhI">Change</div>
                                        <div className="_2kejs">home</div>
                                        <div className="_1QRRt">fd, WJPF+3QH, KHB Colony, Koramangala 4th Block, Koramangala, Bengaluru, Karnataka 560034, India</div>
                                        <div className="_1__JV">{cartItems[0].info.sla.slaString}</div>
                                    </div>
                                    <div className="_250uQ"></div>
                                    <div className="_2b4pY">
                                        <span>
                                            <img className="_1q8J4" src={location} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="_1rwo5">
                                        <div className="F8Sye">
                                            <div className="_2YrH-">Choose payment method</div>
                                        </div>
                                        <button className="_3PNwl" onClick={handleCheckOut}>Proceed to Pay</button>
                                        <div className="_2b4pY">
                                            <span className="_2q4J3">
                                                <img src={wallet} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_2sMsA">
                            <div className="_1LDW5">
                                <button className="_1mJeT">
                                    <span className="_1dcmE">
                                        <img className="" imageurl={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${cartItems[0].info.cloudinaryImageId}`} imageid="" alt="img renderer" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${cartItems[0].info.cloudinaryImageId}`} width="50" height="50" />
                                    </span>
                                    <span className="u1PgV">
                                        <div className="V7Usk">{cartItems[0].info.name}</div>
                                        <div className="_2ofXa">{cartItems[0].info.areaName}</div>
                                    </span>
                                </button>
                                <div className="_1A195">
                                    <div className="_1t-Al">
                                        <div className="_3YMqW"></div>
                                        <div className="_2ObNr _2Y5ZT _2XVjJ _1S7oI">
                                            <div>
                                                <div className="_2zsON"></div>
                                                <div className="_2pdCL">
                                                    {cartItems.map ((item, index) =>
                                                        <div className="_2bXOy" key={item.item.id}>
                                                            <CartItem item={item.item} tPrice={tPrice} setTPrice={setTPrice} index={index} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="_2JQh7">
                                                    <div  className="aeGJF">
                                                        <textarea className="qqwqD" maxLength="140"></textarea>
                                                    </div>
                                                    <div className="_2_0V3">Any suggestions? We will pass it on...</div>
                                                    <svg className="_3iLcN" viewBox="0 0 32 32">
                                                        <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"></path>
                                                    </svg>
                                                </div>
                                                <div className="DBHDW">
                                                    <div className="_3yJGp">
                                                        <div className="_3wdKC">
                                                            <label className="Checkbox_checkboxLabel__3HKUG">
                                                                <input type="checkbox" className="Checkbox_checkboxInput__16SSg" name="CUTLERY_INSTRUCTION_CHK_BOX" value="CUTLERY_INSTRUCTION_CHK_BOX" onClick={() => setClicked(clicked => !clicked)} />
                                                                <svg className="Checkbox_checkboxTick__TZzsL Checkbox_checkboxTickShow__3-VyF" viewBox="0 0 24 24">
                                                                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                                                </svg>
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <div className="_2gBWe">Opt in for No-contact Delivery</div>
                                                            {!clicked && <div className="_2Ohbp">Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</div>}
                                                            {clicked && <div className="_2Ohbp">Our delivery partner will call to confirm. Please ensure that your address has all the required details.</div>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="_3PZFF">
                                                    {selCupon == "" ?   
                                                        (<div role="button" className="_2aJip" onClick={() => handleClose()}>
                                                            <img className="_2W5PY" src={offer} alt="" /> Apply Coupon
                                                        </div>)
                                                        :(<div className="_2eFfS">
                                                            <div className="_2ksRx">
                                                                <div className="_2CuZt">{selCupon}</div>
                                                                <div className="jO5AL">Offer applied on the bill</div>
                                                            </div>
                                                            <span className="_1cXUn" onClick={() => setSelCupon("")}>Remove</span>
                                                        </div>)
                                                    }
                                                    <div className="_3e0Qi">Bill Details</div>
                                                    <div className="_3rlIu">
                                                        <div className="_2VV4a">
                                                            <span>Item Total</span>
                                                        </div>
                                                        <div className="_1I8bA">
                                                            <span className="">
                                                                <span></span>
                                                                <span className="ZH2UW">₹{tPrice*cartItems.length}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="_3rlIu">
                                                        <div className="_2VV4a">
                                                            <div>Delivery Fee | {cartItems[0].info.sla.lastMileTravel} kms
                                                                <div className="_3sNvC">
                                                                    <img src={info} alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="_1I8bA">
                                                            <span className="">
                                                                <span></span>
                                                                <span className="ZH2UW">₹{cartItems[0].info.feeDetails.totalFee/100}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {selCupon != "" &&
                                                        <div>
                                                            <div className="_1Accg"></div>
                                                            <div className="_3rlIu">
                                                                <div className="_2VV4a">
                                                                    <div className=" _green">item Discount
                                                                        <div className="_3sNvC">
                                                                            <img src={info} alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="_1I8bA">
                                                                    <span className="">
                                                                        <span></span>
                                                                        <span className="ZH2UW  _green">-₹100</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                    <div className="_1Accg"></div>
                                                    <div className="_3rlIu">
                                                        <div className="_2VV4a">
                                                            <div>GST and Restaurant Charges
                                                                <div className="_3sNvC">
                                                                    <img src={info} alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="_1I8bA">
                                                            <span className="">
                                                                <span></span>
                                                                <span className="ZH2UW">₹{Math.round((tPrice*cartItems.length*5)/100)}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="_3DPdG"></div>
                                            </div>
                                        </div>
                                        <div className="_1v28S _2Cjz6"></div>
                                    </div>
                                </div>
                                <div className="ZBf6d">
                                    <div>TO PAY</div>
                                    {selCupon == "" ?
                                    (<div className="_3ZAW1">₹{Math.round((tPrice*cartItems.length*5)/100) + cartItems[0].info.feeDetails.totalFee/100 + tPrice*cartItems.length}</div>)
                                    :(<div className="_3ZAW1">₹{Math.round((tPrice*cartItems.length*5)/100) + cartItems[0].info.feeDetails.totalFee/100 + tPrice*cartItems.length - 100}</div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <Coupon handleClose={handleClose} btnCupon={btnCupon} setSelCupon={setSelCupon} />
                </div>)
                :(<div className="_10-lm">
                    <div className="_3a391"></div>
                    <div className="_3Y9ZP">Your cart is empty</div>
                    <div className="d7jCU">You can go to home page to view more restaurants</div>
                    <div className="_3pgCg" onClick={() => navigate("/")}>See restaurants near you</div>
                </div>)
            }
        </div>
    )
}

export default Cart;