import React from "react";

const SearchByPopularCui = ({ popularCusi, selectClick }) => {

    return(
        <div className="Search_widgetsV2__27BBR">
            <div className="styles_container__jxIGl">
                <div></div>
                <div className="styles_headerContainer__2UgeD">
                    <div className="_2cdfd">
                        <h2 className="styles_headerContainerTitle__27_ET">
                            <span>Popular Cuisines</span>
                        </h2>
                        <span className="styles_headerContainerSubtitle__1WRg5"></span>
                    </div>
                </div>
                <div className="_fft45">
                    <div className="styles_slider__podEu">
                        <div className="styles_row__1ivP1">
                            {popularCusi.map((image) =>(
                                <div className="styles_slide__2c207" key={image.id}  onClick={() => selectClick(image.entityId.slice(23))}>
                                    <div className="Carousel_slide__klR8u">
                                        <div>
                                            <div className="styles_container __1Nshr">
                                                <button className="Ripple_container__17nxL styles_containerImg__3AXGh">
                                                    <img alt="" className="styles_img__3HNZ4" loading="lazy"
                                                        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + image.imageId}
                                                    />
                                                </button>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>)
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default SearchByPopularCui;