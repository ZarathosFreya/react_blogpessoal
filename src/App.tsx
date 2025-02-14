import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import './App.css'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
