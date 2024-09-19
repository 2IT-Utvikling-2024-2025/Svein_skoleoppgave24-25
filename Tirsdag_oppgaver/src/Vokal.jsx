import { useState } from "react";

export default function Vokal() {
    
    const [value, setValue] = useState("")

    const vokaler = ['a', 'e', 'i', 'o', 'u', 'æ', 'ø', 'å']

    const [random, setRandom] = useState(Math.round(Math.random())) 

    return (
        <div>
            <h1>Vokal 1.52</h1>
            <label htmlFor="value">Skriv et ord som starter med en {random === 0 ? 'vokal' : 'konsonant'}</label>
            <input type="text" name="value" value={value} onChange={e => setValue(e.target.value)} />
            {value.length === 0 ? null : vokaler.includes(value[0].toLocaleLowerCase()) ? <h2>{random === 0 ? <div>&#x1F44D; Bra!</div> : <div>&#x1F44E;</div>} Ordet du skrev starter med vokalen {value[0]}</h2> : <h2>{random === 0 ? <div>&#x1F44E;</div> : <div>&#x1F44D; Bra!</div>} Ordet du skrev starter med konsonanten {value[0]}</h2>}
        </div>
    )
}