import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Elev from './components/Elev.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path='/elev/:elevID' element={<Elev />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
