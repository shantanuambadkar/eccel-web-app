import eccelImg from './images/siteDisplay/Eccel.png';
import recyclingImg from './images/siteDisplay/Recycling.png';
import './HeaderMainPage.css';

function HeaderMainPage() {
  return (
    <div className="containerMargin">
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
