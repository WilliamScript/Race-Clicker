import './App.css';
import Shop from './Shop.js'
import { useState } from 'react';

function App() {
  const [distance, setDistance] = useState(0)
  const [points, setPoints] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

  

  function clickTire() {
    setPoints(points + multiplier)
    setDistance(distance + multiplier)
    // Spin the wheel: (Shop Item)
    // let wheel = document.getElementsByClassName('tireImage')
    // wheel[0].style.animation = `rotation ${points}s infinite linear`
  }

  return (
    <div>
      <h1>Race Clicker</h1>
      <p>Speed:{points}km/h</p>
      <div className="tireImage" onClick={() => { clickTire() }}></div>
      <Shop 
      points={points}
      setPoints={setPoints}
      multiplier={multiplier}
      setMultiplier={setMultiplier}
      />
      <p className="distance">Distance Traveled:{distance}</p>
    </div>
  );
}

export default App;
