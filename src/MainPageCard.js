import { Card, CardContent } from '@mui/material';
import './MainPageCard.css';
import './index.css';
import { useNavigate } from 'react-router-dom';

function MainPageCard() {
  const navigate = useNavigate();

  function handleVehicleScrapingClick() {
    navigate('/rvsf');
  }

  return (
    <div>
      <h1 className="header-margin heading-primary">Our Businesses</h1>
      <div className="flex-div">
        <Card className="card card-width card1-ht" /* onClick={cardClick} */>
          <CardContent className="card-content">
            <h2>Metal Recycling</h2>
            <div className="card-context-static">
              <span>
                Buying, processing and selling of ferrous and non-ferrous
                recycled metals
              </span>
            </div>
          </CardContent>
        </Card>
        <Card
          className="card card-width card2-ht"
          onClick={handleVehicleScrapingClick}
        >
          <CardContent className="card-content">
            <h2>Registered Vehicle Scrapping Facility (RVSF)</h2>
            <div className="card-context-text">
              <span>
                West Bengal's First Government Licensed Vehicle Recycling
                Facility
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className="card card-width card3-ht" /* onClick={cardClick} */>
          <CardContent className="card-content">
            <h2>Trading</h2>
            <div className="card-context-static">
              <span>Ferrous & Non-Ferrous Metals</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MainPageCard;
