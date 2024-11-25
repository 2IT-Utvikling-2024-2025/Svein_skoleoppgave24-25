import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function AddClassroom(){

    const [classroomName, setClassroomName] = useState("")

    const navigate = useNavigate()

    async function CreateClassroom(){
        const result = await fetch("http://localhost:3000/api/v1/classes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: classroomName, listOfStudentsID: []}),
        }).then((res)=>res.json())
        console.log(result)
        navigate(`/classroom/${result.id}`)
    }

    return( 
        <div>
            <input type="text" value={classroomName} onChange={(e)=>setClassroomName(e.target.value)} />
            <button type="submit" onClick={CreateClassroom}>Add classroom</button>
        </div>
    )
}