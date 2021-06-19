import { useState } from 'react'
const Shop = ({ points, setPoints, multiplier, setMultiplier }) => {

  const [doubleCost, setDoubleCost] = useState(50)
  const [firstPassiveCost, setFirstPassiveCost] = useState(5)

  function doubleMultiplier() {
    if (points >= doubleCost) {
      setDoubleCost(Math.floor(doubleCost * 2.5))
      setMultiplier(multiplier + 1)
      setPoints(points - doubleCost)
    }
  }

  function firstPassive() {
    if (points >= firstPassiveCost) {
      setFirstPassiveCost(Math.floor(firstPassiveCost * 2.5))
      setPoints(points - firstPassiveCost)
      setInterval(() => { setPoints(points + 1) }, 1000) 
    }
    
  }

  return (
    <div>
      <section className="double shopSelection">
        <div className="buttonCost"></div>
        <p>Add one to your clicks!</p>
        <button onClick={() => { doubleMultiplier() }}>Cost: {doubleCost}</button>
      </section>
      <section className="firstPassive shopSelection">
        <div className="buttonCost"></div>
        <p>Passively gain speed!</p>
        <button onClick={() => { firstPassive() }}>Cost: {firstPassiveCost}</button>
      </section>
    </div>
  )
}

export default Shop