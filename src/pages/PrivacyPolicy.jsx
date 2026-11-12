import React from "react";
import "./legal.css";

const PrivacyPolicy = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-container">
          <span className="legal-badge">LEGAL</span>

          <h1>Privacy Policy</h1>

          <p>
            Your privacy matters to us. This Privacy Policy explains how
            Skillanic Technologies Private Limited collects, uses, stores,
            and protects your information when you use our website and services.
          </p>

          <p className="updated-date">
            Last Updated: October 5, 2026
          </p>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container">

          <div className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Skillanic Technologies Private Limited ("Skillanic", "we",
              "our", or "us") operates this website and provides IT training,
              education, career guidance, placement assistance, and related
              services.
            </p>

            <p>
              This Privacy Policy explains how we collect and process
              information when you visit our website, submit an enquiry,
              register for a course, or communicate with us.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Information We Collect</h2>

            <h3>Personal Information</h3>

            <p>
              We may collect information that you voluntarily provide to us,
              including:
            </p>

            <ul>
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Location or city</li>
              <li>Course preferences</li>
              <li>Educational information</li>
              <li>Employment information</li>
              <li>Information provided through enquiry forms</li>
              <li>Information submitted during course registration</li>
            </ul>

            <h3>Technical Information</h3>

            <p>
              When you visit our website, certain technical information may
              automatically be collected, including browser type, device
              information, IP address, pages visited, and general website
              usage information.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. How We Use Your Information</h2>

            <p>We may use collected information to:</p>

            <ul>
              <li>Respond to enquiries and requests</li>
              <li>Provide information about our courses</li>
              <li>Process registrations and admissions</li>
              <li>Provide placement and career assistance</li>
              <li>Improve our courses and services</li>
              <li>Communicate important service-related information</li>
              <li>Send relevant promotional communications where permitted</li>
              <li>Maintain website security and prevent misuse</li>
              <li>Comply with applicable legal requirements</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Cookies</h2>

            <p>
              Our website may use cookies and similar technologies to improve
              website functionality, understand website traffic, remember
              preferences, and improve user experience.
            </p>

            <p>
              You may configure your browser to refuse or restrict cookies.
              However, disabling certain cookies may affect some website
              functionality.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Third-Party Services</h2>

            <p>
              We may use third-party services such as analytics providers,
              advertising platforms, communication services, payment
              processors, hosting providers, or other technology providers.
            </p>

            <p>
              These third parties may process information according to their
              own privacy policies and applicable laws.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Data Security</h2>

            <p>
              We take reasonable technical and organisational measures to
              protect personal information against unauthorised access,
              alteration, disclosure, or destruction.
            </p>

            <p>
              However, no internet-based transmission or storage system can
              be guaranteed to be completely secure.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Data Retention</h2>

            <p>
              We retain personal information only for as long as reasonably
              necessary to fulfil the purposes for which it was collected,
              provide our services, maintain business records, resolve
              disputes, and comply with applicable legal obligations.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Your Rights</h2>

            <p>
              Depending on applicable law, you may have rights relating to
              your personal information, including requesting access,
              correction, or deletion of certain information.
            </p>

            <p>
              You may contact us using the details provided below for
              privacy-related requests.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Children's Privacy</h2>

            <p>
              Our services are primarily intended for students, graduates,
              working professionals, job seekers, and corporate learners.
              We do not knowingly collect personal information from children
              without appropriate consent where such consent is required by
              applicable law.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Changes to This Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our services, technology, or applicable laws.
              Updated versions will be published on this page with a revised
              "Last Updated" date.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Contact Us</h2>

            <p>
              If you have questions regarding this Privacy Policy or the way
              your information is handled, you can contact us at:
            </p>

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

export default PrivacyPolicy;