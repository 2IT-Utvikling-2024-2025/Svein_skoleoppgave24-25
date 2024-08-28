import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [clock, setClock] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setClock(new Date())
    }, 1000)
  }, [])

  return (
    <>
      <h1 className='title'>Digital Clock</h1>
      <h1>{clock.toLocaleTimeString()}</h1>
    </>
  )
}

export default App
