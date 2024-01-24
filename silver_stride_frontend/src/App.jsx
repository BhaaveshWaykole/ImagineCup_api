import React, { useState } from 'react';
import './App.css';

function App() {
  const [generatedNumber, setGeneratedNumber] = useState(null);

  const generateNumber = async () => {
    try {
      const response = await fetch('http://localhost:3001/generate-number');
      const data = await response.json();
      setGeneratedNumber(data.number);
    } catch (error) {
      console.error('Error fetching number:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Silver Stride AI - Number Generation App</h1>
        <button onClick={generateNumber}>Generate Number</button>
        {generatedNumber !== null && (
          <p>Generated Number: {generatedNumber}</p>
        )}
      </header>
    </div>
  );
}

export default App;
