import React from "react";

const SearchSuggest = ({ searchApi, suggestionClick }) => {
    return searchApi == undefined ? ("") : (
        <div>
            { searchApi.map((data, index) =>(
                <button className="_37IIF  _1rZ-i" key={index} onClick={() => suggestionClick(data?.cta?.link.slice(23).split("&"))}>
                <div className="_2f0cx">
                    <img className="_2tuBw _12_oN _2f0cx" alt="" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${data?.cloudinaryId}`} />
                </div>
                <div className="_23LIV">
                    <div className="RNzoC">
                        <b>{data?.text}</b>
                    </div>
                    <div className="_1Z_E6">{data?.tagToDisplay}</div>
                </div>
            </button>)
        )}
    </div>
    )
}

export default SearchSuggest;