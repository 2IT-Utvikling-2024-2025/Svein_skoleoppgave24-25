import { useState } from "react";

export default function DOB() {

    const [value, setValue] = useState('')

    return (
        <div>
            <h1>What is your date of birth?</h1>
            <h2>This will be used to calculate your age for a non existant reason</h2>
            <input type="date" value={value} onChange={(e) => setValue(e.target.value)} />
            <p>{value}</p>
        </div>
    )
}