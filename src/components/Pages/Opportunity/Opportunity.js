import React, { useEffect, useState } from "react";
import { interndata } from "../../Data/data.js"
import './Opportunity.css'
import { useNavigate } from 'react-router-dom';

export const Opportunity = () => {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
          });
          
        setIsActive(true);
      }, []);
  function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

const navigate = useNavigate();

function handleClick(option) {
  navigate(`/opportunity/${option.title}`, { state: { option } });
}

return (
    <>
        <div className={`interndetails ${isActive ? "fade-in" : ""}`}>
            <div className='interndata'>
                {interndata.map((option, index) => {
                    return (
                        <div className="interncard" key={index}>
                            <div className="internimg">
                                <img src={option.img} className="img" onClick={() => handleClick(option)}/>
                            </div>
                            <div className='interntitle' onClick={() => handleClick(option)}><b>{option.title}</b></div>
                            <div className="interndesc">Batch: {option.batch}</div>
                            <div className="interndesc"><b className="subhead">{option.type}:</b> {option.date}</div>
                            {/* <div className="makebtnspace"></div> */}
                            {/* <div className="internbtn"><a href={option.link} target="_blank">Check Here...</a></div> */}
                        </div>
                    );
                })}
            </div>
            {/* <Footer /> */}
        </div >
    </>
)
};
