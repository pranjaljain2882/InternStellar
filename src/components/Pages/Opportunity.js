import React from "react";
import { interndata } from "../Data/data.js"
import './Opportunity.css'
import { useNavigate } from 'react-router-dom';

export const Opportunity = () => {
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

function handleImageClick(option) {
  navigate(`/opportunity/${option.title}`, { state: { option } });
}

return (
    <>
        <div className="interndetails">
            <div className='interndata'>
                {interndata.map((option, index) => {
                    return (
                        <div className="interncard" key={index}>
                            <div className="internimg">
                  <img
                    src={option.img}
                    className="img"
                    onClick={() => handleImageClick(option)}
                  />
                </div>
                            <div className='interntitle'><a href={`${window.location.href}/${option}`} className='interntitle'><b>{option.title}</b></a></div>
                            <div className="interndesc">Batch: {option.batch}</div>
                            <div className="interndesc"><b className="subhead">Internship:</b> {option.date}</div>
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
