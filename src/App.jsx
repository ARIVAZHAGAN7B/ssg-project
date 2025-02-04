import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Tournament from './Pages/Tournament.jsx'
import News from './Pages/News.jsx'
import Personalized from './Pages/Personalized.jsx'
const App = () => {
  return (
    <div style={{border:"50px solid lightgrey" ,borderRadius:"5px"}}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tournaments" element={<Tournament/>} />
      <Route path="/personalized" element={<Personalized/>} />
      <Route path="/news" element={<News/>}/>
    </Routes>
    </div>
  )
}

export default App
