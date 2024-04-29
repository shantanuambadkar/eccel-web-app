import './Footer.css';
import './index.css';
import linkedInLogo from './images/siteDisplay/linkedin-logo.webp';

function Footer() {
  
  return (
    <div id="contactUs" className="center-aligned-text">
      <div>
        <div className="main-div">
          <img
            className="linkedInLogo pointerCursor"
            src={linkedInLogo}
            alt="LinkedIn"
          />
          <p className='footer-font'>Copyright © 2024 ERPL. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
