import { useState } from "react";

export default function Mail() {
    const [value, setValue] = useState("");
    return (
        <div>
            <h1>What is your email?</h1>
            <h2>May be used for a non existant reason which may or may not be a giveaway</h2>
            <input type="email" value={value} onChange={(e) => setValue(e.target.value)} />
            <p>{value}</p>
        </div>
    );
}