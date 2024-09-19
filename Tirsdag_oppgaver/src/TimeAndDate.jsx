import { useState } from "react";

export default function TimeAndDate() {
    const [time, setTime] = useState(new Date())
    const weekDays = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
    const months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

    return (
        <div>
            <h1>Time and Date 1.47</h1>
            <p>{weekDays.map((day) => day+" ")}</p>
            <p>{months.map((month) => month+" ")}</p>
            <button onClick={() => setTime(new Date())}>Get time and date</button>
            <p>
                Klokka er {time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()}
                <br/>
                {weekDays[time.getDay()] + " " + time.getDate() + "." + months[time.getMonth()] + " " + time.getFullYear()}
            </p>
        </div>
    )
}