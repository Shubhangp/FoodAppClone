import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Faqs = ({ Que, isVisible, setShowAns, index }) => {

    return(
            <div className="_3rl8Q" key={Que.id}>
                <button className="O1vpu">
                    <span className="L1QZ_">{Que?.title}</span>
                    {isVisible ? (
                        <SlArrowDown className="_1VUPm"/>
                        ) : (
                        <SlArrowUp onClick={() => setShowAns()} className="_1VUPm" />
                    )}
                </button>
                {isVisible && (
                    <div>
                        {Que?.description == null ? ("")
                            : (<div className="_1YEKM">{Que?.description}</div>)
                        }
                        {Que?.hyperLinkText == null ? ("")
                            : (<a rel="noopener noreferrer" target="_blank" href={Que?.hyperLink} className="_7bf5B">{Que?.hyperLinkText}</a>)
                        }
                        {Que?.options.length == 0 ? ("")
                            : (<div className="GM_Lh">
                                <button className="_2aDLa">
                                    <a className="_1vMNs" href={`mailto:shubhanggpandey@gmail.com?subject=Who should I contact if I need help &amp; support in getting onboarded?`} target="blank">{Que?.options[0]?.type}</a>
                                    <div className="_1tK48">{Que?.options[0]?.waitTime}</div>
                                </button>
                            </div>)
                        }
                    </div>
                )}
            </div>
        )
}

export default Faqs;