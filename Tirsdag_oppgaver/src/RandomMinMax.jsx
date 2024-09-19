import { useState } from 'react'
import getRandomRange from './MineFunksjoner.js'

export default function RandomMinMax() {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [random, setRandom] = useState()

    function getRandom() {
        setRandom(getRandomRange(min, max))
    }

    return (
        <div>
            <h1>Random Min Max 2.07</h1>

            <label htmlFor="min">Min</label>
            <input type="number" name="min" value={min} onChange={e => setMin(e.target.value)} />

            <label htmlFor="max">Max</label>
            <input type="number" name="max" value={max} onChange={e => setMax(e.target.value)} />

            <button onClick={getRandom}>Get random number</button>

            <h2>{random}</h2>
        </div>
    )
}