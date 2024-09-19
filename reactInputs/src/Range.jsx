import { useState } from "react";

export default function Range() {

    const [value, setValue] = useState(0)

    
    return (
        <div>
            <h1>From 1 to 10 how do think this survey is going?</h1>
            <input type="range" value={value} onChange={(e) => setValue(e.target.value)} max={10} min={0} />
            <p>{value}</p>
        </div>
    )
}