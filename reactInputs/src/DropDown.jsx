import { useState } from "react";

export default function Dropdown() {

    const [value, setValue] = useState('')

    return (
        <div>
            <h1>What is the best OS?</h1>
            <select name="" value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="Windows">Windows</option>
                <option value="Mac OS">Mac OS</option>
                <option value="Linux">Linux</option>
                <option value="Chrome OS">Chrome OS</option>
            </select>

            <p>{value}</p>
        </div>
    )

}