import React, { useEffect, useState } from "react";
import "./Contact.css"
export const Contact = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);
  return (
    <div className={`contact-container ${isActive ? "fade-in" : ""}`}>
      <h6>Contact Us</h6>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message" style={{height:"100px"}}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
