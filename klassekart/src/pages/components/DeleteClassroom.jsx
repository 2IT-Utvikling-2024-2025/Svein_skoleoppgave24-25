import { useNavigate } from "react-router-dom"


export default function DeleteClassroom({classroom}){

    const navigate = useNavigate()

    async function DeleteClass(){
        classroom.students.forEach(async (student)=> {
            await fetch(`http://localhost:3000/api/v1/students/${student.id}`, {method: "DELETE"})
        })
        await fetch(`http://localhost:3000/api/v1/classes/${classroom.id}`, {method: "DELETE"})
        navigate("/")
    }

    return(
        <button onClick={DeleteClass}>Delete {classroom.name}</button>
    )
}