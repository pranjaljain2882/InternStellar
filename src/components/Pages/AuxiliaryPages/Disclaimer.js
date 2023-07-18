import React, { useEffect, useState } from "react";
import "./AuxiliaryPages.css";

export const Disclaimer = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);
  return (
    <div className={`about-container ${isActive ? "fade-in" : ""}`}>
      <h6 className="about-title" id="about-title">Disclaimer</h6>
      <p className="about-description" id="about-description2">
      Welcome to InternStellar! Before you proceed to use our website and its services, we kindly request that you read and understand the following disclaimer. By accessing or using InternStellar, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions stated below. If you do not agree with any part of this disclaimer, please refrain from using our website and its services.
      </p>
      <p>
        <ol>
            <li className="about-description" id="about-description3">General Information: InternStellar is an online platform that aims to connect students with internships and job opportunities. We provide a platform for students to explore available opportunities and apply directly through our website. However, please note that InternStellar is not responsible for the accuracy, completeness, or reliability of the information provided by third-party employers, organizations, or individuals offering internships or jobs on our platform.</li>
            <li className="about-description" id="about-description3">Third-Party Content: Our website may contain links, advertisements, or information provided by third parties, including employers and external websites. InternStellar does not endorse or guarantee the accuracy, reliability, or quality of the content, products, or services provided by these third parties. Any reliance you place on such information is done at your own risk.</li>
            <li className="about-description" id="about-description3">Application Process: InternStellar acts as a facilitator for internship and job applications. While we strive to ensure a smooth application process, we do not guarantee the acceptance, interview, or employment of any applicant. The final decision regarding internships and job placements rests solely with the employers or organizations offering the positions.</li>
            <li className="about-description" id="about-description3">User Responsibilities: Users of InternStellar are responsible for their own actions and decisions when using our website. It is your responsibility to verify the accuracy of the information provided by employers or organizations before applying for any internships or jobs. We encourage you to exercise caution and perform your due diligence when interacting with employers or organizations found on InternStellar.</li>
            <li className="about-description" id="about-description3">Limitation of Liability: InternStellar, its employees, agents, or representatives shall not be held liable for any direct or indirect damages, losses, or liabilities arising from the use of our website, including but not limited to the accuracy of information, job application outcomes, or actions taken by third parties.</li>
            <li className="about-description" id="about-description3">Changes to Disclaimer: InternStellar reserves the right to modify, update, or remove any part of this disclaimer at any time without prior notice. It is your responsibility to review this disclaimer periodically for any changes. Continued use of our website and services after any modifications constitutes your acceptance of the revised disclaimer.</li>

        </ol>
        <p className="about-description" id="about-description2">By using InternStellar, you agree to comply with all applicable laws and regulations and accept the terms outlined in this disclaimer. If you have any questions or concerns about this disclaimer, please contact us through the provided channels of communication on our website.</p>
      </p>
    </div>
  );
};
