import './Footer.css';
import contactImg from './images/icons8-contact-us-16.png';
import phoneImg from './images/icons8-phone-94.png';
import { useState } from 'react';
import LeadGenerationPopup from './LeadGenerationPopup';

function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(false);
  };
  function handleLeadPopup() {
    setShowPopup(true);
  }
  return (
    <div>
      <div>{showPopup && <LeadGenerationPopup showHide={togglePopup} />}</div>
      <div className="footer-alignment">
        <div>
          <div className="loader" onClick={handleLeadPopup}>
            Contact Us
          </div>
        </div>
        <div className="footer-font">
          <div>
            <img
              className="phone-img"
              src={phoneImg}
              alt="Blue color telephone receiver"
            />
            +033 46044066 / +91 471 828 82
          </div>
          <div>
            <img src={contactImg} alt="Office building with contact card" />
            6/2 Moira Street, Fourth Floor, Kolkata 700017, West Bengal, India.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
