import { useState } from 'react';
import './App.css';
import LeadGenerationPopup from './LeadGenerationPopup';

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      <div>{showPopup && <LeadGenerationPopup showHide={togglePopup} />}</div>
      <div>
        <span>Home Page</span>
      </div>
    </div>
  );
}

export default App;
