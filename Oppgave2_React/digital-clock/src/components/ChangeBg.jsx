import { useEffect, useState } from "react";

export default function ChangeBg(){
    const [colour, setColour] = useState('#242424')

    useEffect(() => {
        document.documentElement.style.setProperty("background-color", colour)
        console.log(colour)
        return () => document.documentElement.style.setProperty("background-color", "#242424")
    }, [colour])

    return (
        <div>
            <input type="text" value={colour} onChange={(e) => setColour(e.target.value)} />
        </div>
    )

}