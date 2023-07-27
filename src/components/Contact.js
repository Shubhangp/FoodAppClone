import React, { useEffect, useState } from "react";
import Legal from "./Legal";
import Faqs from "./Faqs";
import PartnerOnboarding from "./PartnerOnboarding";
import Shimmer from "./ShimmerHome";

const Contact = () => {

    const [helpType, setHelpType] = useState([]);

    const [helpQues, setHelpQues] = useState([]);

    const [btnHelp, setBtnHelp] = React.useState(true);

    const [btnHelp1, setBtnHelp1] = React.useState(false);

    const [btnHelp2, setBtnHelp2] = React.useState(false);

    const [navbar, setNarBar] = React.useState(false);

    const [showAns, setShowAns] = useState(null);

    function helpClick(e){
        setBtnHelp(true);
        setBtnHelp1(false);
        setBtnHelp2(false);
    }

    function helpClick1(){
        setBtnHelp1(true);
        setBtnHelp(false);
        setBtnHelp2(false);
    }

    function helpClick2(){
        setBtnHelp2(true);
        setBtnHelp(false);
        setBtnHelp1(false);
    }

    let btnHelpCheck = btnHelp ? " _1W0l-" : "";
    let btnHelpText = btnHelp ? " fmxXC" : "";

    let btnHelpCheck1 = btnHelp1 ? " _1W0l-" : "";
    let btnHelpText1 = btnHelp1 ? " fmxXC" : "";

    let btnHelpCheck2 = btnHelp2 ? " _1W0l-" : "";
    let btnHelpText2 = btnHelp2 ? " fmxXC" : "";

    useEffect(() => {
        fetchData();
    });

    const fetchData = async() => {
        var data = await fetch("https://www.swiggy.com/dapi/support");
        const json = await data.json();
        setHelpType(json?.data?.issueTypes?.data);
    }

    useEffect(() => {
        fetchQuesData();
    },[btnHelp,btnHelp1,btnHelp2]);

    const fetchQuesData = async() => {
        if(btnHelp){
            var quesData = await fetch("https://www.swiggy.com/dapi/support/issues/partner-onboarding");
        }else if(btnHelp1){
            var quesData = await fetch("https://www.swiggy.com/dapi/support/issues/legal");
        }else if(btnHelp2){
            var quesData = await fetch("https://www.swiggy.com/dapi/support/issues/faq");
        }
        const json = await quesData.json();
        // console.log(json);
        setHelpQues(json?.data?.issues?.data);
    }

    const changeHeader = () => {
        if (document.documentElement.scrollTop >= 172) {
            setNarBar(true);
        }else{
            setNarBar(false);
        }
    }

    window.addEventListener('scroll', changeHeader);

    return helpType.length == 0? (
        <Shimmer/>
        ):(<div>
        <div className="nDVxx">
            <div className="_1w2w1">
                <div className="_2BkKe">
                    <div className="_2u7X5">
                        <h1 className="_2qu87">Help &amp; Support</h1>
                        <div className="nVlfh">Let's take a step ahead and help you better.</div>
                    </div>
                </div>
                <div className={navbar ? "_3ANBe _1-rIX _3MXWN" : "_3ANBe _1-rIX O6J5C "}>
                    <div className="_2G5fZ">
                        <div className="_2VR4Z">
                            <div className="-dIwe">Help &amp; Support</div>
                            <div className="_3qvHl">Let's take a step ahead and help you better.</div>
                        </div>
                    </div>
                </div>
                <div className="_3tDvm ">
                    <div className={navbar ? "v6luz FvIBT" : "v6luz"}></div>
                    <div className="_2QhOV _3glSS">
                        <div className="_3R9IF">
                            <div className="_2gu8R">
                                <ul>
                                    <li className={`_2y6HV${btnHelpCheck}`} onClick={() => helpClick()}>
                                        <span className={`_3aS-n${btnHelpText}`}>{helpType[0]?.title}</span>
                                    </li>
                                    <li className={`_2y6HV${btnHelpCheck1}`} onClick={() => helpClick1()}>
                                        <span className={`_3aS-n${btnHelpText1}`}>{helpType[1]?.title}</span>
                                    </li>
                                    <li className={`_2y6HV${btnHelpCheck2}`} onClick={() => helpClick2()}>
                                        <span className={`_3aS-n${btnHelpText2}`}>{helpType[2]?.title}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="-zxNr">
                                <div>
                                    <div className="_2at3z">
                                        {btnHelp ?
                                        "Partner Onboarding" : ("")}
                                        {btnHelp1 ?
                                        "Legal" : ("")}
                                        {btnHelp2 ?
                                        "FAQs" : ("")}
                                    </div>
                                    <div>
                                        {btnHelp ?
                                        (<div>
                                            {helpQues.map((Que, index) => (<PartnerOnboarding 
                                                                                Que={Que} 
                                                                                isVisible={index === showAns ? true : false}
                                                                                setShowAns={() => setShowAns(index)}
                                                                                />))}
                                        </div>) : ("")}
                                        {btnHelp1 ?
                                        (<div>
                                            {helpQues.map((Que, index) => (<Legal 
                                                                                Que={Que}
                                                                                isVisible={index === showAns ? true : false}
                                                                                setShowAns={() => setShowAns(index)}
                                                                                />))}
                                        </div>) : ("")}
                                        {btnHelp2 ?
                                        (<div>
                                            {helpQues.map((Que, index) => (<Faqs 
                                                                                Que={Que}
                                                                                isVisible={index === showAns ? true : false}
                                                                                setShowAns={() => setShowAns(index)}
                                                                                index={index}
                                                                                />))}
                                        </div>) : ("")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={navbar ? "_1a4Mf _3m2h5" : "_1a4Mf"}></div>
                </div>
            </div>
        </div>
     </div>)
 }
 
 export default Contact;