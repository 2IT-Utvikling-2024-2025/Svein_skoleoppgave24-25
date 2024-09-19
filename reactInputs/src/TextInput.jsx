import { useState } from 'react'

export default function TextInput() {

    const [text, setText] = useState('')

    return (
        <div>
            <h1>What is your name?</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>{text}</p>
            <button onClick={() => setText('')}>Clear</button>
        </div>
    )
}