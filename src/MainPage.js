import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import './index.css';
import './MainPage.css';
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

      <Carousel />
      
      <AboutUs />
      
      <MainPageCard />
      
      <Sustainability />
      
      <Footer />
      
    </div>
  );
}

export default MainPage;
