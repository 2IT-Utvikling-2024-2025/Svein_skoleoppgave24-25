import { useEffect, useState } from "react";


export default function Clock(){

    const [clock, setClock] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
          setClock(new Date())
        }, 1000);

        return () => clearInterval(interval);
      }, [])

      return (
        <h2>{clock.toLocaleTimeString()}</h2>
      )

}