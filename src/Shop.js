import { useState } from 'react'
const Shop = ({ points, setPoints, multiplier, setMultiplier }) => {

    const [cost, setCost] = useState(50)

    function doubleMultiplier() {
        if (points >= cost) {
            setCost(Math.floor(cost * 1.5))
            setMultiplier(multiplier + 1);
            setPoints(points - cost)
        }
    }
    return (
        <main className="Shop">
            <div className="buttonCost"></div>
            <p>Double your points!</p>
            <button onClick={() => { doubleMultiplier() }}>Cost: {cost}</button>
        </main>
    )
}

export default Shop