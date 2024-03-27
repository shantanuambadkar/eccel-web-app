import { Card, CardContent, Typography } from '@mui/material';
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
          <Typography variant="h5" component="h2">
            Metal Recycling
          </Typography>
          <br />
          <Typography>
            Buying, processing and selling of ferrous and non-ferrous recycled
            metals
          </Typography>
        </CardContent>
      </Card>
      <Card className="card" onClick={handleVehicleScrapingClick}>
        <CardContent className="card-content">
          <Typography variant="h5" component="h2">
            Registered Vehicle Scrapping Facility (RVSF)
          </Typography>
          <br />
          <Typography>
            West Bengal's First Government Licensed Vehicle Recycling Facility
          </Typography>
        </CardContent>
      </Card>
      <Card className="card" /* onClick={cardClick} */>
        <CardContent className="card-content">
          <Typography variant="h5" component="h2">
            Trading
          </Typography>
          <br />
          <Typography>Ferrous & Non-Ferrous Metals</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default MainPageCard;
