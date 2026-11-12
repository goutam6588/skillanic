import React from "react";
import "./legal.css";

const TermsAndConditions = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-container">
          <span className="legal-badge">LEGAL</span>

          <h1>Terms & Conditions</h1>

          <p>
            These Terms & Conditions govern your use of the Skillanic website,
            courses, training programs, and related services.
          </p>

          <p className="updated-date">
            Last Updated: October 5, 2026
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container">

          <div className="legal-section">
            <h2>1. Acceptance of Terms</h2>

            <p>
              By accessing or using the Skillanic website or enrolling in any
              Skillanic course or training program, you agree to comply with
              these Terms & Conditions.
            </p>

            <p>
              If you do not agree with these terms, please do not use our
              website or services.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. About Our Services</h2>

            <p>
              Skillanic provides IT training, technical education, career
              guidance, placement assistance, corporate training, and related
              educational services.
            </p>

            <p>
              Course content, duration, schedule, delivery mode, trainers,
              fees, and other program details may change when reasonably
              necessary.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Course Registration</h2>

            <p>
              Students are responsible for providing accurate information
              during registration and enquiry processes.
            </p>

            <p>
              Admission or enrolment may be subject to availability,
              eligibility requirements, payment of applicable fees, and other
              conditions communicated by Skillanic.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Course Fees and Payments</h2>

            <p>
              Course fees and payment terms will be communicated to the
              student before enrolment.
            </p>

            <p>
              Students are responsible for making payments according to the
              agreed schedule. Any applicable taxes, payment gateway charges,
              or other charges will be communicated where relevant.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Refund and Cancellation</h2>

            <p>
              Refund eligibility, cancellation conditions, and applicable
              deductions, if any, will depend on the specific course,
              admission terms, and payment policy communicated at the time
              of enrolment.
            </p>

            <p>
              Students should review the applicable refund or cancellation
              terms before making payment.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Placement Assistance</h2>

            <p>
              Skillanic may provide placement assistance, interview
              preparation, resume guidance, job referrals, and related career
              support.
            </p>

            <p>
              Placement assistance does not necessarily constitute a guarantee
              of employment, salary, job role, company selection, or specific
              compensation unless expressly stated in a separate written
              agreement.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Student Responsibilities</h2>

            <p>Students are expected to:</p>

            <ul>
              <li>Attend training sessions regularly</li>
              <li>Follow reasonable institute rules</li>
              <li>Respect trainers, staff, and other students</li>
              <li>Complete assigned projects and coursework</li>
              <li>Provide accurate information</li>
              <li>Use learning resources responsibly</li>
              <li>Avoid unauthorised distribution of course materials</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>8. Intellectual Property</h2>

            <p>
              Course materials, website content, logos, graphics, videos,
              documents, software, training resources, and other materials
              provided by Skillanic may be protected by intellectual property
              laws.
            </p>

            <p>
              You may not reproduce, distribute, sell, publish, or commercially
              exploit Skillanic materials without prior written permission.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Website Usage</h2>

            <p>
              You agree not to misuse the website, attempt unauthorised access,
              introduce malicious software, interfere with website operations,
              or use the website for unlawful activities.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Third-Party Links</h2>

            <p>
              Our website may contain links to third-party websites or
              services. Skillanic is not responsible for the content,
              availability, security, or privacy practices of third-party
              websites.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Limitation of Liability</h2>

            <p>
              To the extent permitted by applicable law, Skillanic shall not
              be liable for indirect, incidental, special, or consequential
              losses arising from the use of the website or educational
              services.
            </p>
          </div>

          <div className="legal-section">
            <h2>12. Changes to These Terms</h2>

            <p>
              Skillanic may modify these Terms & Conditions from time to time.
              Updated terms will be published on this page and will become
              effective when posted.
            </p>
          </div>

          <div className="legal-section">
            <h2>13. Governing Law</h2>

            <p>
              These Terms & Conditions shall be governed by the applicable
              laws of India. Any disputes shall be subject to the appropriate
              courts and jurisdiction in Karnataka, India, subject to
              applicable law.
            </p>
          </div>

          <div className="legal-section">
            <h2>14. Contact</h2>

            <div className="contact-box">
              <strong>Skillanic Technologies Private Limited</strong>

              <p>
                SVM Complex, Marathahalli Bridge,
                <br />
                Bengaluru, Karnataka - 560037, India
              </p>

              <p>
                Email:{" "}
                <a href="mailto:info@skillanic.com">
                  info@skillanic.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;