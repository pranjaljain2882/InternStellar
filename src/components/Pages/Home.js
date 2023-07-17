import React, { useEffect, useState } from "react";
import './Home.css'
import { interndata } from "../Data/data.js"
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);
      }, []);

  const navigate = useNavigate();

  function handleClick(option) {
    navigate(`/opportunity/${option.title}`, { state: { option } });
  }

  function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
  };

  return (

      <div className={`home ${isActive ? "fade-in" : ""}`}>
      <div className="interndetails">
            <div className='interndata'>
                {interndata.slice(0, 6).map((option, index) => {
                  return (
                    <div className="interncard" key={index}>
                            <div className="internimg">
                                <img src={option.img} className="img" onClick={() => handleClick(option)}/>
                            </div>
                            <div className='interntitle' className='interntitle' onClick={() => handleClick(option)}><b>{option.title}</b></div>
                            <div className="interndesc">Batch: {option.batch}</div>
                            <div className="interndesc"><b className="subhead">{option.type}:</b> {option.date}</div>
                            {/* <div className="makebtnspace"></div> */}
                            {/* <div className="internbtn"><a href={option.link} target="_blank">Check Here...</a></div> */}
                        </div>
                    );
                  })}
            </div>
            <div className="btn"><a href='/opportunity'>Show More</a></div>
        </div>

    </div>
  );


}