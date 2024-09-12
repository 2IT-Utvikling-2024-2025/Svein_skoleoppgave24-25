import './css/App.css'
import MyButton from './Button'
import Clock from './Clock'
import KlasseKart from './Klassekart'
import Count from './Count'
import { useState } from 'react'
import ChangeBg from './ChangeBg'

//? En react komponent er en JS funksjon som returnerer en HTML tag.
function App() {

  const user = {
    name: 'Svein',
    age: 17,
    adresse: 'Magiskveien 4'
  }

  const klasse = {
    elever : [
      {
        navn: "elevens navn",
        plassering: "1a"
      }
    ],
    plasser: {
      x: [1,2,3,4,5,6],
      y: ["a","b","c"]
    }
  }

  return (
    <div>
      <h1>Digital Clock</h1>
      <p>
        {user.name}, {user.age} år<br />
        {user.adresse}
        </p>
      <Clock />
      <MyButton />
      <KlasseKart />
      <ChangeBg />
    </div>
  )
}

export default App
