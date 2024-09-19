import { useState } from "react";

export default function Phone() {

    const [value, setValue] = useState('')

    return (
        <div>
            <h1>What is your phone number?</h1>
            <h2>May be used for a non existant reason</h2>
            <input type="tel" value={value} onChange={(e) => setValue(e.target.value)} />

            <p>{value}</p>
        </div>
    )
}