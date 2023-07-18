import React, { useEffect, useState } from "react";
import "./AuxiliaryPages.css";

export const TermsOfServices = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);
  return (
    <div className={`about-container ${isActive ? "fade-in" : ""}`}>
      <h6 className="about-title" id="about-title">Terms of Service</h6>
      <p className="about-description" id="about-description">
      These Terms of Service govern your use of the InternStellar website and its services. Please read these Terms carefully before accessing or using our website. By accessing or using InternStellar, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using our website and its services.      </p>
      <h3 className="about-heading" id="about-heading">Use of Services</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li><b>Eligibility:</b> By using InternStellar, you represent that you are at least 16 years old. If you are accessing or using our services on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.</li>
            <li><b>Account Creation:</b> To access certain features and services, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
            <li><b>Prohibited Conduct:</b> You agree not to engage in any of the following activities while using InternStellar:
                    a. Violating any applicable laws, regulations, or third-party rights.
                    b. Posting, transmitting, or sharing any content that is unlawful, harmful, defamatory, obscene, or otherwise objectionable.
                    c. Impersonating another person or entity or falsely representing your affiliation with a person or entity.
                    d. Interfering with or disrupting the operation of InternStellar or the servers or networks connected to it.
                    e. Attempting to gain unauthorized access to any portion of InternStellar, other user accounts, or any computer systems or networks.</li>

        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Internships and Job Listings</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li><b>Accuracy of Information:</b> InternStellar strives to provide accurate and up-to-date information regarding internships and job listings. However, we do not guarantee the accuracy, completeness, or reliability of the information provided by third-party employers, organizations, or individuals.</li>
            <li><b>Application Process:</b> InternStellar acts as a platform to facilitate internship and job applications. While we make efforts to ensure a smooth application process, we do not guarantee the acceptance, interview, or employment of any applicant. The final decision regarding internships and job placements rests solely with the employers or organizations offering the positions.</li>        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Intellectual Property</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li><b>Ownership: </b> WInternStellar and its licensors retain all rights, title, and interest in and to the website, its content, and any associated intellectual property rights. You agree not to reproduce, modify, distribute, or create derivative works based on our website or its content without our prior written consent.</li>
            <li><b>User Content:</b>By posting or submitting any content on InternStellar, you grant us a worldwide, royalty-free, non-exclusive, perpetual, irrevocable, and sublicensable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with our services.</li>
        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Limitation of Liability</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li>InternStellar, its employees, agents, or representatives shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, data, or other intangible losses resulting from:
            a. Your use or inability to use our services.
            b. Any content or conduct of any third party on InternStellar.
            c. Any unauthorized access to or alteration of your transmissions or data.
            d. Any other matter relating to InternStellar or our services.</li>
        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Modifications to the Terms</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li>InternStellar reserves the right to modify or update these Terms at any time without prior notice. We will notify you of any changes by posting the revised Terms on our website. Your continued use of InternStellar after any modifications constitute your acceptance of the revised Terms.</li>
        </ul>
      </p>
      <h3 className="about-heading" id="about-heading">Termination</h3>
      <p className="about-description" id="about-description">
        <ul>
            <li>We may, at our discretion, suspend or terminate your access to InternStellar or its services at any time without prior notice or liability for any reason, including, but not limited to, a breach of these Terms.</li>
        </ul>
      </p>
      
    
    </div>
  );
};
