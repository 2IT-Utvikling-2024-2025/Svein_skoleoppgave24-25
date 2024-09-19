import { useState } from "react";

export default function Complaints() {

    const [value, setValue] = useState('')

    function send() {
        alert("Thank you for your feedback! Your message has been disposed of.")
        setValue('')
    }

    return (
        <div>
            <h1>Do you have any complaints about the survey?</h1>
            <textarea value={value} onChange={(e) => setValue(e.target.value)}>
            </textarea>
            <p>{value}</p>
            <button onClick={send}>Send</button>
        </div>
    )
}