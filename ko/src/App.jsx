import { useState } from 'react'
import './App.css'
import Inputs from './Inputs'
import Koer from './Koer'

function App() {

  const [id, setId] = useState(0);

  const [kunder, setKunder] = useState({
    ikkeIkø: [],
    kø: []
  });

  const [koer, setKoer] = useState({
    ekspress: [],
    vanlig: [],
  });

  return (
    <>
    <Inputs />
    <Koer />
    </>
  )
}

export default App
