import LeadGenerationPopup from './LeadGenerationPopup';
import './Footer.css';
import './index.css';
import { useState } from 'react';
import mapsLoca from './images/MapsLocation.png';
import HeaderMainPage from './HeaderMainPage';
import { Grid } from '@mui/material';

export default function ContactUs(){

    const [showPopup, setShowPopup] = useState(false);
    const companyName = "Eccel Exports Private Limited";

    /* const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(companyName)}&zoom=12&size=600x600&key=AIzaSyBFtCHKaHsZ65qFW-Tx4reAz_qQS8rE2S0`; */

    const togglePopup = () => {
        setShowPopup(false);
    };
    function handleLeadPopup() {
        setShowPopup(true);
    }

    const handleButtonClick = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyName)}`;
        window.open(googleMapsUrl, '_blank');
    };

    return <div>
        <Grid container>
            <Grid item xs={2}>
                <HeaderMainPage/>
            </Grid>
        </Grid>
        
        <div>{showPopup && <LeadGenerationPopup showHide={togglePopup} />}</div>
        <div className="footer-alignment">
          <div>
            <div>
              <h1 onClick={handleLeadPopup} className='pointer heading-primary'>Contact Us</h1>
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
              <span className='pointer' onClick={handleButtonClick}>
                6/2 Moira Street, Fourth Floor, Kolkata 700017, West Bengal,
                India.
              </span>
            </div>
            <div>
                <img className='pointer gm-image-margin gm-image-resolution' src={mapsLoca}alt="Google Map" onClick={handleButtonClick}/>
            </div>
          </div>
        </div>
    </div>
}
