import { useState } from "react"


export default function AddStudent({appendingData}){

    const [name, setName] = useState("")
    const [age, setAge] = useState()

    async function createStudent(){
        if (name != "" || age != 0 ||age != undefined){
            const result = await fetch("http://localhost:3000/api/v1/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name: name, age: age}),
            }).then((data)=>data.json())
            console.log(result)
            appendingData(result)
        }
    }

    return(
        <div>
            <input type="text" name="" id="" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="number" name="" id="" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} />
            <button type="submit" onClick={createStudent}>Create student</button>
        </div>
    )
}