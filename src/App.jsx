import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Tournament from './Pages/Tournament.jsx'
import News from './Pages/News.jsx'
import Personalized from './Pages/Personalized.jsx'
import Login from "./Pages/Login.jsx"
import Register from './Pages/Register.jsx'
import Forgot from './Pages/Forgot.jsx'
const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tournaments" element={<Tournament/>} />
      <Route path="/personalized" element={<Personalized/>} />
      <Route path="/news" element={<News/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
    </Routes>
    </div>
  )
}

export default App
