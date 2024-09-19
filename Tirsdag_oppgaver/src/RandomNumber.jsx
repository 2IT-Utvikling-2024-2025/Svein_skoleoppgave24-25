import { useState } from "react";

export default function RandomNumber() {

    const [fVal, setFval] = useState(Math.floor(Math.random() * 10))
    const [Lval, setLval] = useState(Math.floor(Math.random() * 10))


    return (
        <div>
            <h1>Random Number 1.50</h1>
            <h3>{fVal % 2 === 0 ? 'Even' : 'Odd'}</h3>
            <h2>{fVal}</h2>
            <h2>+</h2>
            <h3>{Lval % 2 === 0 ? 'Even' : 'Odd'}</h3>
            <h2>{Lval}</h2>
            <h2>=</h2>
            <h3>{(fVal + Lval) % 2 === 0 ? 'Even' : 'Odd'}</h3>
            <h2>{fVal + Lval}</h2>

        </div>
    )
}