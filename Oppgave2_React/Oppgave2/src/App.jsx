import { useEffect, useState } from 'react'
import './App.css'
import MyHobbies from './MyHobbies'
import Profil from './Profil'
import MySkills from './MySkills'

function App() {

  return (
    <div className='mainContainer'>
    <Profil />
    <MySkills />
    </div>
  )
}

export default App
