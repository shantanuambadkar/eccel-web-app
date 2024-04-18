import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carScrap from './images/siteDisplay/AdobeStock_115212900.png';
import metalWaste from './images/siteDisplay/AdobeStock_495066276.png';
import carDoors from './images/siteDisplay/AdobeStock_396137067.png';
import carBoxed from './images/siteDisplay/AdobeStock_1758154.png';
import carWithSky from './images/siteDisplay/AdobeStock_469726182.png';

import './Carousel.css';

function Carousel() {
  const images = [carScrap, metalWaste, carDoors, carBoxed, carWithSky];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: false,
  };

  return (
    <div className="carousel-conatiner-div">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="innerDiv">
            <img
              className="carouselImg"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            {/* <img
              className="carouselImg"
              src={image}
              alt={`Slide ${index + 2}`}
            /> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
