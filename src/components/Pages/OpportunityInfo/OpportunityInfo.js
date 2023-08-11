import React, { useEffect, useState } from "react";
import './OpportunityInfo.css'
import { useLocation, useParams } from 'react-router-dom';
import { RecentOpenings } from "../RecentOpenings/RecentOpenings";

export const OpportunityInfo = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: "smooth", 
          });

        setIsActive(true);
      }, []);

    const location = useLocation();
    const { option } = location.state;
return (
    <>
        <div className={`oppinfo ${isActive ? "fade-in" : ""}`}>
            <div className="oppimg">
                <img src={option.img} className="oppimg"/>
            </div>
            <div className="oppdate">POSTED ON: {option.date}</div>
            <div className="opptitle"><b>{option.title}</b></div>
            <div className="oppdesc">{option.companydesc}</div>
            <div className="opp"><b>Designation: </b>
                <div className="subopp"> {option.designation} </div>
            </div>
            <div className="opp"><b>Batch Eligible:</b>
                <div className="subopp"> {option.batch} </div>
            </div>
            {option.stipend && (
                <div className="opp"><b>Stipend Per Month:</b>
                    <div className="subopp"> {option.stipend} </div>
                </div>
            )}
            {option.lastdate && (
                <div className="opp"><b>Last Date to Apply:</b>
                    <div className="subopp"> {option.lastdate} </div>
                </div>
            )}
            {option.salary && (
                <div className="opp"><b>Salary:</b>
                    <div className="subopp"> {option.salary} </div>
                </div>
            )}
            {option.location && (
                <div className="opp"><b>Location:</b>
                    <div className="subopp"> {option.location} </div>
                </div>
            )}
            {option.role && (
                <div className="opp"><b>Role:</b>
                    <div className="subopp"> {option.role} </div>
                </div>
            )}
            {option.duration && (
                <div className="opp"> Duration:
                    <div className="subopp">{option.duration}</div>
                </div>
            )}
            {option.skills && (
                <div className="opp"><b>Skills:</b>
                    <div className="subopp">{option.skills}</div>
                </div>
            )}
            {option.qualifications && (
                <div className="opp"><b>Qualifications:</b>
                    {option.qualifications.map((options, index) => {
                        return (
                            <div className="subopp" key={index}>
                                <ul>
                                    <li>{options}</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            )}
            {option.why && (
                <div className="opp"><b>Why Join Us:</b>
                    {option.why.map((options, index) => {
                        return (
                            <div className="subopp" key={index}>
                                <ul>
                                    <li>{options}</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            )}
            <div className="opp">
                <a href={option.link} target="_blank">Check Here To Apply</a>
            </div>
        </div>
            <RecentOpenings/>
    </>
)
};

