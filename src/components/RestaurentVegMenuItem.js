import React, { useState } from "react";
import vege from "../utils/vege.png";
import nonveg from "../utils/nonveg.png";
import { useDispatch } from "react-redux";
import { addItem } from "../redux_utilis/cartSlice";

const RestaurentVegMenuItem = ({ item, itemLength, index, info }) => {
    const [count, setCount] = useState(0);

    if(count < 0) {
        setCount(0);
    }

    const modifyItem = {info : info, item: item};

    const dispatch = useDispatch();

    const handleAddItem = (modifyItem) => {
        // Dispatch an action
        dispatch(addItem(modifyItem));
        setCount(count +1);
    }

    const { name, description, price, defaultPrice, imageId, itemAttribute, isBestseller } = item;

    return (<div className="menu">
                {itemAttribute.vegClassifier == "VEG" ?
                    (<div>
                        <div className="styles_container">
                            <div className="styles_item">
                                <div className="styles_detailsContainer">
                                    <div>
                                        <span className="res_card_img">{itemAttribute.vegClassifier == "NONVEG" ? (<img src={nonveg}/>) : (<img src={vege}/>)}</span>
                                        <span className="styles_ribbon styles_itemRibbon">
                                            <span className="styles_ribbonStar icon_star">
                                                {isBestseller == true ? "★ Bestseller" : ""}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="styles_itemName">
                                        <h3 className="styles_itemNameText">{name}</h3>
                                    </div>
                                    <div className="styles_itemPortionContainer">
                                        <span className="styles_price"><span className="rupee">{price/100 || defaultPrice/100}</span></span>
                                    </div>
                                    <div className="styles_itemDesc">{description}</div>
                                </div>
                                <div className="styles_itemImageContainer">
                                    <div>
                                        <button className="styles_itemImagebtn">
                                            <img className="styles_itemImage" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + imageId} />
                                        </button>
                                    </div>
                                    <div className="styles_itemAddButton">
                                        <div className="main_buttonInner main_button _211P0 _3L1X9">
                                            <div className="_1uN_a _1RPOp _4aKW6">ADD</div>
                                            <div className="_29Y5Z _2od4M" onClick={() => {
                                                setCount(count -1);
                                                }}>
                                                
                                            </div>
                                            <div className="_2zAXs _18lJJ"> {count} </div>
                                            <div className="_1ds9T _2Thnf" onClick={() => () => handleAddItem (modifyItem)}>
                                                +
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { itemLength == index + 1 ? ("")
                            :(<div className="styles_divider"></div>)
                        }
                    </div>
                    )
                    : ("")
                }
        </div>
    )
}

export default RestaurentVegMenuItem;