import { useState } from "react";

export default function Convert() {

    const [value, setValue] = useState(0)

    return (
        <div>
            <h1>Convert 1.43</h1>
            <h2>{(value/2.54).toFixed(2)} Tommer</h2>

<label htmlFor="value">Value in centimeters</label>
            <input type="number" name="value" value={value} onChange={e => setValue(e.target.value)} />
        </div>
    )
}
