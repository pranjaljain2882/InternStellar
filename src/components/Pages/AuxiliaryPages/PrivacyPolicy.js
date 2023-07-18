import React, { useEffect, useState } from "react";
import "./AuxiliaryPages.css";

export const PrivacyPolicy = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);
  return (
    <div className={`about-container ${isActive ? "fade-in" : ""}`}>
      <h6 className="about-title" id="about-title">Privacy Policy</h6>
      <p className="about-description" id="about-description">
      At InternStellar, we are committed to protecting the privacy and personal information of our users. This Privacy Policy outlines how we collect, use, disclose, and safeguard the information you provide while using our website and its services. By accessing or using InternStellar, you consent to the practices described in this Privacy Policy.
      </p>
      <h3 className="about-heading" id="about-heading">Information We Collect</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li><b>Personal Information:</b> When you create an account or use our services, we may collect personal information such as your name, email address, contact details, educational background, and other relevant information you provide voluntarily.</li>
            <li><b>Usage Information:</b> We may collect information about your interactions with our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected automatically using cookies and similar technologies.</li>
        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Use of Information</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li><b>Providing Services:</b> We use the information we collect to provide and improve our services, including facilitating internships and job applications, communicating with you, and personalizing your experience on our website.</li>
            <li><b>Analytics and Research:</b> We may use aggregated and anonymized information for analytical purposes, such as evaluating user trends, measuring the effectiveness of our services, and conducting research to enhance user experience.</li>
            <li><b>Communications:</b>We may send you administrative notifications, updates, newsletters, and promotional materials related to our services. You can opt-out of receiving marketing communications at any time.</li>
        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Information Sharing</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li><b>Third-Party Service Providers: </b> We may share your information with third-party service providers who assist us in operating our website, conducting our business, or providing services on our behalf. These providers have access to your information only to perform tasks assigned to them and are obligated not to disclose or use it for any other purpose.</li>
            <li><b>Legal Requirements:</b>We may disclose your information if required to do so by law or if we believe that such action is necessary to comply with legal obligations, protect our rights or the rights of others, investigate fraud, or respond to a government request.</li>
        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Data Security</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li>We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security of your information.</li>
        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Third-Party Links</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li>Our website may contain links to third-party websites, services, or advertisements. 
                We are not responsible for the privacy practices employed by these third parties. 
                We encourage you to read their privacy policies before interacting with them.</li>
        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Children's Privacy</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li>InternStellar does not knowingly collect personal information from individuals under the age of 16. If you believe that we may have collected personal information from a child under 16, please contact us, and we will take appropriate measures to delete that information from our records.</li>
        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Changes to the Privacy Policy</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li>InternStellar reserves the right to modify or update this Privacy Policy at any time. We will notify you of any changes by posting the revised policy on our website. It is your responsibility to review this Privacy Policy periodically for any modifications. Continued use of our website and services after any changes constitutes your acceptance of the revised Privacy Policy.</li>
        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Contact Us</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li>If you have any questions, concerns, or requests regarding this Privacy Policy or the privacy practices of InternStellar, please contact us through the provided channels of communication on our website.</li>
        </ul>
      </p>
    </div>
  );
};
