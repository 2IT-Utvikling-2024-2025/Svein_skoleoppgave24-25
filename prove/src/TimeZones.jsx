import { useEffect, useState } from "react";


export default function TimeZones({zone}){

    const [Time, setTime] = useState(new Date);

    useEffect(() =>{
        setInterval(() => {
            const Timezone = new Date
            console.log(Timezone.getUTCHours())
        }, 1000);
    })

}