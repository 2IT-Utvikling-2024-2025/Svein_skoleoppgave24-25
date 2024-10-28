import './App.css'
import About from './About'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import NoPage from './NoPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<Home/>} />
      <Route element={<About/>} path='About' />
      <Route element={<NoPage/>} path='*' />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
