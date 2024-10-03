
 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
 import Navbar from "./components/coman/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import GCard from './pages/GCard'
import Contact from './pages/Contact'


function App() {



  return (
    <>
    <BrowserRouter>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="about" element={<About />} />
        <Route path="gCard" element={<GCard />} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
