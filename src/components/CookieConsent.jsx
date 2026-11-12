import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CookieConsent.css";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("skillanic_cookie_consent");

    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("skillanic_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("skillanic_cookie_consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">

        <div className="cookie-icon">
          🍪
        </div>

        <div className="cookie-text">
          <h3>We use cookies</h3>

          <p>
            We use cookies to improve your browsing experience, analyze
            website traffic, and provide better services.
          </p>

          <div className="cookie-links">
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms-and-conditions">
    Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="cookie-actions">
          <button
            className="cookie-reject"
            onClick={handleReject}
          >
            Reject
          </button>

          <button
            className="cookie-accept"
            onClick={handleAccept}
          >
            Accept Cookies
          </button>
        </div>

      </div>
    </div>
  );
}