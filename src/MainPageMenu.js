import { Tab, Tabs } from '@material-ui/core';
import './MainPageMenu.css';

function MainPageMenu() {
  function handleChange(event, newValue) {
    if (['0', '1', '2', '3'].includes(newValue)) {
      console.log(newValue);
    } else {
      console.error(`Invalid value provided to Tabs component: ${newValue}`);
    }
  }
  return (
    <Tabs
      onChange={(event, newValue) => handleChange(event, newValue)}
      centered
      className="main-page-menu"
    >
      <Tab value="0" label="About Us" />
      <Tab value="1" label="Our Businesses" />
      <Tab value="2" label="Sustainability" />
      <Tab value="3" label="Contact Us" />
    </Tabs>
  );
}

export default MainPageMenu;
