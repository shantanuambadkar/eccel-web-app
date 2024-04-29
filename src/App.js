import { useState } from 'react';
import './App.css';
import LeadGenerationPopup from './LeadGenerationPopup';
import RVSFHome from './rvsf/RVSFHome';

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div /* className="App" */>
      <div>{showPopup && <LeadGenerationPopup showHide={togglePopup} />}</div>
      <RVSFHome />
    </div>
  );
}

export default App;
