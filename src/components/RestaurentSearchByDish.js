import React from "react";
import RestaurantNestedSearchCategory from "./RestaurantNestedSearchCategory";
import RestaurentSearchCategory from "./RestaurentSearchCategory";

const RestaurentSearchByDish = ({ clickSearch, menu, info, searchText, setSearchText }) => {

    const { name } = info;

    return(
        <div className="nDVxx">
            <div>
                <div className="_31qxg">
                    <div className="_1Etxm">
                        <div className="_3BaXb">
                            <div className="_1RUKu">
                                <button className="Back_back__3AFlt" onClick={() => clickSearch()}>
                                    <svg className="Back_backIcon__1LhL_" viewBox="0 0 32 32" height="18" width="18">
                                        <path d="M3.333 14.984l28.667-0v2.097l-0.16 0.006h-28.506l-0.16-0.16v-1.782l0.16-0.16zM1.114 14.986l10.079-10.079 0.121-0.108 1.465 1.467-0.101 0.127-10.079 10.079h-0.226l-1.26-1.26v-0.226zM12.679 25.676l0.108 0.117-1.468 1.484-0.126-0.115-10.079-10.079v-0.226l1.26-1.26h0.226l10.079 10.079zM3.268 12.87l0.272 0.116-0.022 6.125-0.272 0.114-3.245-3.18 0.111-0.112 3.157-3.062z"></path>
                                    </svg>
                                </button>
                                <div className="MIJ71">
                                    <label>
                                        <input 
                                            type="text" 
                                            className="_3afzg" 
                                            placeholder={`Search in ${name}`} 
                                            value={searchText} 
                                            onChange={(e) => {
                                                setSearchText(e.target.value);
                                            }} 
                                        />
                                    </label>
                                </div>
                                { searchText == "" ?
                                    (<div className="vk0x-">
                                        <span className="icon-magnifier">
                                            <svg className="icon-magnifier" viewBox="5 -1 12 25" height="17" width="17" fill="#686b78">
                                                <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
                                            </svg>
                                        </span>
                                    </div>)
                                    : (<button onClick={() => setSearchText("")}>
                                        <span className="_3u-Kn">
                                            <span className="oESCA icon-close"></span>
                                        </span>
                                    </button>)
                                }
                            </div>
                        </div>
                    </div>
                    { searchText.length >= 2 ?
                        (<div>
                            {menu.map((item, index) => (
                                <div key={index}>
                                    {item.categories ? (
                                        <RestaurantNestedSearchCategory nestedCategory={item} />
                                    ) : (
                                        <RestaurentSearchCategory searchCategory={item} searchText={searchText} />
                                    )}
                                </div>)
                            )}
                        </div>)
                        : ("")
                    }
                </div>
            </div>
        </div>
    )
}

export default RestaurentSearchByDish;