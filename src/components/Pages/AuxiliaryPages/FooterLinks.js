import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FooterLinks() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = document.querySelector(".site-info").clientHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      setShowFooter(scrollY > windowHeight - footerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`site-info ${showFooter ? "show" : ""}`} style={{ zIndex: "9999", width: "100%" , paddingTop: "20px" }}>
      <div className="inside-site-info grid-container grid-parent">
        <div className="footer-bar"></div>
      </div>
      <div className="disclaimer-link-container" style={{ textAlign: "center" }}>
        <Link
          to="/disclaimer"
          style={{ textDecoration: "none", color: "black", marginRight: "18px", fontSize: "12px", marginLeft:"20px" }}
        >
          Disclaimer
        </Link>
        <Link
          to="/terms-of-services"
          style={{ textDecoration: "none", color: "black", marginRight: "18px", fontSize: "12px" }}
        >
          Terms of Services
        </Link>
        <Link to="/privacy-policy" style={{ textDecoration: "none", color: "black", fontSize: "12px" }}>
          Privacy Policy
        </Link><br></br>
        <a style={{ color: "black", fontSize: "12px"}}>©2023 InternStellar</a>
      </div>
    </footer>
  );
}

export default FooterLinks;
