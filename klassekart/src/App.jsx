import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from './pages/Profile.jsx';
import Klasse from './pages/Klasse.jsx'
import MainPage from './pages/MainPage.jsx';
import './pages/App.css'

function App(){

    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/profile/:bruker' element={<Profile />} />
          <Route path='/classroom/:classID' element={<Klasse />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App