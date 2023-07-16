import React from "react";
import './OpportunityInfo.css'
import { useLocation, useParams } from 'react-router-dom';

export const OpportunityInfo = () => {
    const location = useLocation();
    const { option } = location.state;
return (
    <>
        <div className="oppinfo">
            <div className="oppimg">
                <img src={option.img} className="oppimg"/>
            </div>
            <div className="oppdate">POSTED ON: {option.date}</div>
            <div className="opptitle"><b>{option.title}</b></div>
            <div className="oppdesc">{option.companydesc}</div>
            <div className="oppdesig">Designation:
                <div className="suboppdesig"> {option.designation} </div>
            </div>
            <div className="oppbatch">Batch Eligible:
                <div className="suboppbatch"> {option.batch} </div>
            </div>
            {option.stipend && (
                <div className="oppstipend">Stipend Per Month:
                    <div className="suboppbatch"> {option.stipend} </div>
                </div>
            )}
            {option.location && (
                <div className="opplocation">Location:
                    <div className="subopplocation"> {option.location} </div>
                </div>
            )}
            {option.duration && (
                <div className="oppduration"> Duration:
                    <div className="suboppduration">{option.duration}</div>
                </div>
            )}
            {option.skills && (
                <div className="oppskills"> Duration:
                    <div className="suboppskills">{option.skills}</div>
                </div>
            )}
            <a href={option.link} target="_blank">Check Here...</a>
        </div>
    </>
)
};

    //   qualifications: 
