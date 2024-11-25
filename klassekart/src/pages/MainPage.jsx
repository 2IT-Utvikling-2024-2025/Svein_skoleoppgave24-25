import { useEffect, useState } from "react"
import AddClassroom from "./components/AddClassroom"
import { Link } from "react-router-dom"


export default function MainPage(){

    const [classes, setClasses] = useState([])

    useEffect(()=>{
        const startFetch = setInterval(async () => {

            const result = await fetch("http://localhost:3000/api/v1/classes").then((data)=>data.json())

            setClasses(result)

        }, (500))

        return(()=>clearInterval(startFetch))
    }, [])

    return(
        <div>
            <AddClassroom />
            <div>
                {classes.map((classroom)=>
                    <Link key={classroom.id} to={`/classroom/${classroom.id}`}>
                        <h1>{classroom.name}</h1>
                        <h2>{classroom.students}</h2>
                    </Link>
                )}
            </div>
        </div>
    )
}