import React/* , {lazy, Suspense} */ from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import './index.css';
import './MainPage.css';
/* const Carousel = lazy(() => import('./Carousel')); */
import Footer from './Footer';
import MainPageCard from './MainPageCard';
import Sustainability from './Sustainability';
import Carousel from './Carousel';
import HeaderMainPage from './HeaderMainPage';
import MainPageMenu from './MainPageMenu';
import AboutUs from './AboutUs';

function MainPage() {
  return (
    <div>
      <Grid container className="center-aligned-flex-div">
        <Grid item xs={2}>
          <HeaderMainPage />
        </Grid>
        <Grid item xs={10}>
          <MainPageMenu />
        </Grid>
      </Grid>
      {/* <Suspense fallback={<div className='loader-container'><div class="loader"></div></div>}> */}
        <Carousel />
     {/*  </Suspense> */}
      <AboutUs />
      {/* <div className="mainpage-slide-container">
        <div className="mainpage-image-container">
          <img className="mainPageImg" src={carWithSky} alt="Car with Sky" />
          {loaded && (
            <div className="text-overlay">
              <p>
                Eccel Recycling Private Limited (ERPL) is a leading ferrous and
                non-ferrous metals company headquartered in Kolkata, West
                Bengal. Incorporated in 2018, ERPL operates in three independent
                business verticals - recycling of industrial pipes, registered
                vehicle scrapping facility (RVSF), and trading of ferrous and
                non-ferrous scrap. Our metals recycling operations are located
                in Uluberia, West Bengal. Eccel Recycling plays and integral
                role in the circular economy by making resources available for
                future use.
              </p>
            </div>
          )}
        </div>
      </div> */}
      <MainPageCard />
      <Sustainability />
      <Footer />
      {/* <Carousel /> */}
    </div>
  );
}

export default MainPage;
