import { useEffect, useState } from "react";
import {Corregidor} from "react-explode"
import Clock from "./Clock";

export default function Count(){
    const [count, setCount] = useState(10)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isRunning){
            if (count <= 0) {
                setIsRunning(true)
                setCount(10)
            }else{
            setCount(count - 1)
            }
        }
        },1000)

        return () => clearInterval(interval)
    }, [count, isRunning])

    return (
        <div>
            {isRunning? <Corregidor size={600} onComplete={() => setIsRunning(false)} /> : count}
        </div>
    )
}