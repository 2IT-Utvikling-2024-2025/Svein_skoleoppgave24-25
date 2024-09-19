import { useState } from "react";

export default function OddOrEven() {

    const [value, setValue] = useState(0)

    function oddOrEven(array) {
        const even = array.filter((element) => element % 2 === 0)
        return even
    }

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    oddOrEven(arr)

    return (
        <div>
            <h1>Odd Or Even 1.49</h1>
            <h2>{value % 2 === 0 ? 'Even' : 'Odd'}</h2>
            <label htmlFor="value">Value</label>
            <input type="number" name="value" value={value} onChange={e => setValue(e.target.value)} />
        </div>
    )
}