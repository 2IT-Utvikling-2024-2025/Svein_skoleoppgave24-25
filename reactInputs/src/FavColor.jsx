import { useEffect, useState } from "react";

export default function FavColor() {

    const [value, setValue] = useState('');

    useEffect(() => {
        document.body.style.backgroundColor = value
    }, [value])

    return (
        <div>
            <h1>What is your favorite color?</h1>
            <input type="color" value={value} onChange={(e) => setValue(e.target.value)} />
            <p>{value}</p>
        </div>
    )

}