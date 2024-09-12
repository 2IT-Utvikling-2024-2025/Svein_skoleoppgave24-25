import { useEffect, useState } from "react"
import './css/Button.css'


export default function MyButton(){

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    },[count])

    function HandleClick(){
        setCount(count + Math.floor(Math.random() * 1000000))
    }

    return(
        <button onClick={HandleClick}>I am a button {count}</button>
    )
}