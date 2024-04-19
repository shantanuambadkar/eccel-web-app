import './Footer.css';
import './index.css';
import { useState } from 'react';
import LeadGenerationPopup from './LeadGenerationPopup';
import linkedInLogo from './images/siteDisplay/linkedin-logo.webp';

function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(false);
  };
  function handleLeadPopup() {
    setShowPopup(true);
  }
  return (
    <div className="center-aligned-text">
      <div>
        <div>{showPopup && <LeadGenerationPopup showHide={togglePopup} />}</div>
        <div className="footer-alignment">
          <div>
            <div onClick={handleLeadPopup}>
              <h1 className='pointer heading-primary'>Contact Us</h1>
            </div>
          </div>
          <div className="footer-font">
            <div>
              <a
                href="tel:+913346044066"
                target="_blank"
                rel="noopener noreferrer"
              >
                +913346044066
              </a>{' '}
              /{' '}
              <a
                href="https://wa.me/+919147182882"
                target="_blank"
                rel="noopener noreferrer"
              >
                +919147182882
              </a>
            </div>
            <div>
              6/2 Moira Street, Fourth Floor, Kolkata 700017, West Bengal,
              India.
            </div>
          </div>
        </div>
        <div className="main-div">
          <img
            className="linkedInLogo pointerCursor"
            src={linkedInLogo}
            alt="LinkedIn"
          />
          <p>Copyright © 2024 ERPL. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
