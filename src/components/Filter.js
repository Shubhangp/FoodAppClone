import React from "react";
import { Link } from "react-router-dom";

const Filter = (props) => {

    const { sort,
            totalRestaurant, 
            handleClickSort, handleClickSort1, handleClickSort2, handleClickSort3, handleClickSort4, 
            btnSort, btnSort1, btnSort2, btnSort3, btnSort4 } = props;

    // console.log(sort);


    return(
        <div className="filters k4axS">
            <div className="_19Aso">
                <div className="_2LB31">
                    <div className="_3IrNP">
                        <div className="BZR3j">{totalRestaurant.totalRestaurants} restaurants</div>
                        <div className="_3Ynv-">
                            <Link className="_2-ofZ _3bkpC" to="/search">
                                <span className="icon-magnifier Vqj7X">
                                    <svg className="_1GTCc" viewBox="5 -1 12 25" height="17" width="17" fill="#686b78">
                                        <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z">
                                        </path>
                                    </svg>
                                </span>
                                Search
                            </Link>
                            <div className={btnSort ? "_2-ofZ _3hfyI" : "_2-ofZ"} key={sort[0].key} onClick={() => handleClickSort(sort[0].key)}>{sort[0].title}</div>
                            <div className={btnSort1 ? "_2-ofZ _3hfyI" : "_2-ofZ"} key={sort[1].key} onClick={() => handleClickSort1(sort[1].key)}>{sort[1].title}</div>
                            <div className={btnSort2 ? "_2-ofZ _3hfyI" : "_2-ofZ"} key={sort[2].key} onClick={() => handleClickSort2(sort[2].key)}>{sort[2].title}</div>
                            <div className={btnSort3 ? "_2-ofZ _3hfyI" : "_2-ofZ"} key={sort[3].key} onClick={() => handleClickSort3(sort[3].key)}>{sort[3].title}</div>
                            <div className={btnSort4 ? "_2-ofZ _3hfyI" : "_2-ofZ"} key={sort[4].key} onClick={() => handleClickSort4(sort[4].key)}>{sort[4].title}</div>
                            <div className="_2-ofZ">
                                <span className="h0xOG">Filters</span>
                                <div className="_3eFQ-">
                                    <span className="icon-filter _1PoQ7"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;