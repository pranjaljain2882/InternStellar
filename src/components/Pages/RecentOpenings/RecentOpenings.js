import React, { useEffect, useState } from "react";
import './RecentOpenings.css'
import { interndata } from "../../Data/data.js"
import { useNavigate } from 'react-router-dom';

export const RecentOpenings = () => {


  const navigate = useNavigate();

  function handleClick(option) {
    navigate(`/opportunity/${option.title}`, { state: { option } });
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }

  function showClick() {
    navigate(`/opportunity`);
  }

  return (

      <div className='recent'>
        <h6>Recent Openings</h6>
            <div className='recentdata'>
                {interndata.slice(0, 6).map((option, index) => {
                  return (
                    <div className="recentcard" key={index}>
                            <div className="recentimg">
                                <img src={option.img} className="recentimg" onClick={() => handleClick(option)}/>
                            </div>
                            <div className="recentinfo">
                                <div className='recenttitle' onClick={() => handleClick(option)}><b>{option.title}</b></div>
                                <div className="recentdesc"><b className="subhead">{option.type}:</b> {option.date}</div>
                            </div>
                        </div>
                    );
                  })}
            <div className="btn" onClick={showClick}><p>Show More</p></div>
        </div>

    </div>
  );


}