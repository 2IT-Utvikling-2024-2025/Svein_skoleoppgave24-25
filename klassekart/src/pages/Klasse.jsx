import { useParams } from 'react-router-dom';
import './App.css'
import AddStudent from './components/AddStudent';
import Kart from './components/kart/Kart'
import { useState, useEffect } from 'react';
import DeleteClassroom from './components/DeleteClassroom';

function Klasse() {

  const [classroom, setClassroom] = useState({id: null, name: null, students: [] })

  const [classStudents, setClassStudents] = useState([])

  const { classID } = useParams()

  async function fetchData(){
      const resultStudents = await fetch("http://localhost:3000/api/v1/students").then((data)=>data.json())
      const resultClassroom = await fetch(`http://localhost:3000/api/v1/classes/${classID}`).then((data)=>data.json())

      console.log(resultStudents)
      console.log(resultClassroom)

      setClassroom(resultClassroom)

      if (resultClassroom.students[0] != undefined) setClassStudents(resultClassroom.students)

      return
  }

  async function addToData(appendingData){
    const newClassroomData = {name: classroom.name, listOfStudentsID:[]}
    classroom.students.forEach((e)=>newClassroomData.listOfStudentsID.push(e.id))
    newClassroomData.listOfStudentsID.push(appendingData.id)
    console.log(newClassroomData)
    await fetch(`http://localhost:3000/api/v1/classes/${classroom.id}`,{
      method: "PUT",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(newClassroomData),
    })
    classStudents.push(appendingData)
    setClassStudents([...classStudents])
  }

  useEffect(() => {

    fetchData()

  }, []);

  return (
    <div>
      <h1>Klassekart {classroom?.name}</h1>
      <DeleteClassroom classroom={classroom}/>
      <AddStudent appendingData={addToData} />
      <Kart data={classStudents} />
    </div>
  )
}

export default Klasse
