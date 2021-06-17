import './App.css';
import Shop from './Shop.js'
import { useState } from 'react';

function App() {
  const [points, setPoints] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

  function clickTire() {
    setPoints(points + multiplier)
  }

  return (
    <div>
      <h1>Race Clicker</h1>
      <p>{points}</p>
      <div className="tireImage" onClick={() => { clickTire() }}></div>
      <Shop 
      points={points}
      setPoints={setPoints}
      multiplier={multiplier}
      setMultiplier={setMultiplier}
      />
    </div>
  );
}

export default App;
