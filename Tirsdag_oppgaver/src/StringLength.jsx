import { useState } from "react";

export default function StringLength() {

    const [value, setValue] = useState("")

    const randomNum = Math.floor(Math.random() * 20)

    return (
        <div>
            <h1>String Length 1.51</h1>
            <label htmlFor="value">Word</label>
            <input type="text" name="value" value={value} onChange={e => setValue(e.target.value)} />
            <h2>{value.length === 0 ? null : value.length === randomNum ? <p>&#x1F44D; Bra! ordet består av {value.length} bokstaver</p> : <p>&#x1F44E; Ordet ditt består av {value.length} bokstaver</p>}</h2>
        </div>
    )
}