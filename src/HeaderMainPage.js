import eccelImg from './images/siteDisplay/Eccel.png';
import recyclingImg from './images/siteDisplay/Recycling.png';
import './HeaderMainPage.css';
import { useNavigate } from 'react-router-dom';

function HeaderMainPage() {
  const navigate = useNavigate();
  
  function handleNavigate(){
    navigate('/');
  }
  return (
    <div onClick={handleNavigate} className="cursor-pointer containerMargin">
      <div>
        <img className="logoImg" src={eccelImg} alt="Blue Eccel Logo" />
      </div>
      <div>
        <img className="logoImg" src={recyclingImg} alt="Recycling Logo" />
      </div>
    </div>
  );
}

export default HeaderMainPage;
