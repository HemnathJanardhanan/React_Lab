import './App.css'
import Header from './components/custom/Header'
import HomePage from './pages/HomePage'
import {Routes,Route} from 'react-router-dom'
import React from 'react';


function App() {
  

  return (
    <div className='min-h-screen bg-custom'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
