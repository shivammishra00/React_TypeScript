import React from 'react';
import './App.css';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <Home name="shivam" salary={200} isEligible={false} />
    </div>
  );
}

export default App;
