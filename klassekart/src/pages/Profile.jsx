import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function Profile() {

    const navigate = useNavigate()

    const [name, setName] = useState("")

    const [age, setAge] = useState()

    const [classes, setClasses] = useState([])

    const { bruker } = useParams()

    const [data, setData] = useState()

    async function fetchStudentAndClasses(){
        if (bruker != null || bruker != undefined){
            const result = await fetch(`http://localhost:3000/api/v1/students/${bruker}`).then((data)=>data.json())
            setData(result)
            const resultClasses = await fetch(`http://localhost:3000/api/v1/classes`).then((data)=>data.json())
        }
        return
    }

    useEffect(()=>{
        fetchStudentAndClasses()
    }, [])

    async function updateStudent(){
        if (name != "" || age != 0 ||age != undefined){
            const result = await fetch(`http://localhost:3000/api/v1/students/${bruker}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name: name, age: age}),
            }).then((data)=>data.json())
            console.log(result)
        }
    }

    async function removeStudent(){
        await fetch(`http://localhost:3000/api/v1/students/${bruker}`,{method: "DELETE"}).then((data)=>data.json())
        navigate(-1)
    }

    return (
        <>
        <h1>Profile</h1>
        <button  onClick={()=>navigate(-1)}>Back</button>
            <h1>{data?.name != undefined ? data.name : null }</h1>
            {data?.age != undefined? <p>alder: {data.age}</p> : null }
            {data?.name ? <p>Id: {bruker}</p> : null }
            <div>
            <input type="text" name="" id="" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="number" name="" id="" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} />
                <button type="submit" onClick={updateStudent}>Update student</button>
            </div>
            {data?.name ? <button type="submit" onClick={removeStudent}>Remove student</button> : null }
        </>
    )
}