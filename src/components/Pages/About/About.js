import React, { useEffect, useState } from "react";
import "./About.css";

export const About = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);
  return (
    <div className={`about-container ${isActive ? "fade-in" : ""}`}>
      <h6 className="about-title" id="about-title">About InternStellar</h6>
      <p className="about-description" id="about-description">
        Our website aims to simplify the process of finding internships and jobs
        by aggregating listings from multiple portals into a single platform.
        We understand the challenges faced by students and professionals when
        searching for opportunities, so we have created a centralized hub where
        you can discover a wide range of options.
      </p>
      <p className="about-description" id="about-description2">
        With our user-friendly interface and comprehensive search functionality,
        you can easily browse through various internship and job listings
        tailored to your preferences and qualifications. We provide detailed
        information about each opportunity, including company profiles,
        requirements, and application instructions.
      </p>
      <p className="about-description" id="about-description3">
        Our mission is to connect talented individuals with valuable
        experiences, helping them build a successful career path. Whether you're
        a student seeking your first internship or a professional looking for a
        new job opportunity, InternStellar is here to assist you in finding the
        perfect match.
      </p>
    </div>
  );
};
