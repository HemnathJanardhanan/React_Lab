
import './App.css'
import HomePage from './component/HomePage'
import Menu from './component/Menu'
import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from './component/NavBar';

function App() {


  return (
    <div className='flex bg-yellow-100 font-mono justify-center items-center w-full min-h-screen'>  
    <NavBar/>  
      <Routes>
      
        <Route path="/" element={<HomePage/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </div>
  )
}

export default App;

