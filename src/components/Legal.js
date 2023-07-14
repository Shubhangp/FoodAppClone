import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Legal = ({ helpQues }) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleView = () => {
        setIsVisible(!isVisible);
      };

    return (<div>
            {helpQues.map((Que) => (
                <div className="_3rl8Q" key={Que.id}>
                <button className="O1vpu">
                    <span className="L1QZ_">{Que?.title}</span>
                    {isVisible ? (
                        <SlArrowDown onClick={toggleView} className="_1VUPm"/>
                        ) : (
                        <SlArrowUp onClick={toggleView} className="_1VUPm" />
                    )}
                </button>
                {isVisible && (
                    <div>
                        <div className="_1YEKM">{Que?.description}</div>
                        <a rel="noopener noreferrer" target="_blank" href={Que?.hyperLink} className="_7bf5B">{Que?.hyperLinkText}</a>
                        <div className="GM_Lh">
                            <button className="_2aDLa">
                                <a className="_1vMNs" href={`mailto:shubhanggpandey@gmail.com?subject=Who should I contact if I need help &amp; support in getting onboarded?`} target="blank">{Que?.options[0]?.type}</a>
                                <div className="_1tK48">{Que?.options[0]?.waitTime}</div>
                            </button>
                        </div>
                    </div>
                )}
                </div>)
            )}
        </div>
        )
}

export default Legal;