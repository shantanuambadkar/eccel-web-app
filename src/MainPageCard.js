import { Card, CardContent } from '@mui/material';
import './MainPageCard.css';
import { useNavigate } from 'react-router-dom';

function MainPageCard() {
  const navigate = useNavigate();

  function handleVehicleScrapingClick() {
    navigate('/rvsf');
  }

  return (
    <div className="flex-div">
      <Card className="card" /* onClick={cardClick} */>
        <CardContent className="card-content">
          <h2>Metal Recycling</h2>
          <span className="card-content-static">
            Buying, processing and selling of ferrous and non-ferrous recycled
            metals
          </span>
        </CardContent>
      </Card>
      <Card className="card" onClick={handleVehicleScrapingClick}>
        <CardContent className="card-content">
          <h2>Registered Vehicle Scrapping Facility (RVSF)</h2>
          <span className="card-content-text">
            West Bengal's First Government Licensed Vehicle Recycling Facility
          </span>
        </CardContent>
      </Card>
      <Card className="card" /* onClick={cardClick} */>
        <CardContent className="card-content">
          <h2>Trading</h2>
          <span className="card-content-static">
            Ferrous & Non-Ferrous Metals
          </span>
        </CardContent>
      </Card>
    </div>
  );
}

export default MainPageCard;
