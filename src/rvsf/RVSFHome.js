import { Tab, Tabs } from '@material-ui/core';

function RVSFHome() {
  function handleChange(event, newValue) {
    // Validate newValue to ensure it's one of the specified values
    if (['0', '1', '2'].includes(newValue)) {
      console.log(newValue);
    } else {
      console.error(`Invalid value provided to Tabs component: ${newValue}`);
    }
  }
  return (
    <Tabs
      onChange={(event, newValue) => handleChange(event, newValue)}
      centered
    >
      <Tab value="0" label="Item One" />
      <Tab value="1" label="Item Two" />
      <Tab value="2" label="Item Three" />
    </Tabs>
  );
}

export default RVSFHome;
