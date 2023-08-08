import React, { useState } from "react";
import vege from "../utils/vege.png";
import nonveg from "../utils/nonveg.png";

const CartItem = ({ item, itemCon }) => {
    const [count, setCount] = useState(1);

    if(count < 0) {
        setCount(0);
    }

    return(
        <div className="_2bXOy2">
            <div className="_3SG03">
                {item.itemAttribute.vegClassifier == "NONVEG" ? (<img className="_2MJB6" src={nonveg}/>) : (<img className="_2MJB6" src={vege}/>)}
                <div className="_33KRy">{item.name}
                    <button className="_23dMP">Customize</button>
                </div>
            </div>
            <div className="_2bWmk">
                <div className="_1yTZI">
                    <div className="_3L1X9 _29ugw">
                        <div className="_1ds9T"  onClick={() => {
                            setCount(count +1);
                        }}>+</div>
                        <div className="_29Y5Z"  onClick={() => {
                            setCount(count -1);
                        }}></div>
                        <div className="_2zAXs">{count}</div>
                    </div>
                    <div className="_1mx0r">
                        <span className="_2W2U4">₹{item.price/100 || item.defaultPrice/100 * count}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;