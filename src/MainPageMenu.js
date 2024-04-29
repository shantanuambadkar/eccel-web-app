import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import './MainPageMenu.css';
import { useNavigate } from 'react-router-dom';

function MainPageMenu() {

  const navigate = useNavigate();

  const handleTabClick = (value) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Tabs
      centered
      className="main-page-menu"
    >
      <Tab value="aboutUs" onClick={() => handleTabClick('aboutUs')} label="About Us" />
      <Tab value="ourBusiness" onClick={() => handleTabClick('ourBusiness')} label="Our Businesses" />
      <Tab value="sustainability" onClick={() => handleTabClick('sustainability')} label="Sustainability" />
      <Tab value="contactUs" onClick={() => navigate('/contactus') /* handleTabClick('contactUs') */} label="Contact Us" />
    </Tabs>
  );
}

export default MainPageMenu;
