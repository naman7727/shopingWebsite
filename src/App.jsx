
 import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import Navbar from "./components/coman/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import GCard from './pages/GCard'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'


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
        <Route path="login" element={<Login/>} />
        <Route  path="cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
