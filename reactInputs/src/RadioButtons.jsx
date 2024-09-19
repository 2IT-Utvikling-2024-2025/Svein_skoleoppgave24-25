import { useState } from "react";

export default function RadioButtons() {

    const [value, setValue] = useState('')

    return (
        <div>
            <h1>Which is the best IT class?</h1>
            <div>
                <h2>A</h2>
                <input type="radio" name="radios" value="A" onChange={(e) => setValue(e.target.value)} />
                </div>
            <div>
                <h2>B</h2>
                <input type="radio" name="radios" value="B" onChange={(e) => setValue(e.target.value)} />
                </div>

            <p>{value}</p>
        </div>
    )
}