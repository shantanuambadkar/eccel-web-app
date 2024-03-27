import React from 'react';
import './App.css';
import './index.css';
import './MainPage.css';
import Footer from './Footer';
import MainPageCard from './MainPageCard';

function MainPage() {
  return (
    <div className="center-aligned">
      <h1>Eccel Recycling Pvt. Ltd. (ERPL)</h1>
      <div className="margin-after-header">
        Eccel Recycling Private Limited (ERPL) is a leading ferrous and
        non-ferrous metals company headquartered in Kolkata, West Bengal.
        Incorporated in 2018, ERPL operates in three independent business
        verticals - recycling of industrial pipes, registered vehicle scrapping
        facility (RVSF), and trading of ferrous and non-ferrous scrap. Our
        metals recycling operations are located in Uluberia, West Bengal. Eccel
        Recycling plays and integral role in the circular economy by making
        resources available for future use.
      </div>
      <MainPageCard />
      <Footer />
    </div>
  );
}

export default MainPage;
