import { useState } from 'react'
import './App.css'
import Login from './Components/LoginPage/Login'
import { Route, Routes } from 'react-router'
import StudentBoard from './Components/StudentDash/StudentBoard'
function App() {

  return (
    <>
     <Routes>
      <Route path='' element={<Login />} />
      <Route path='/studentdashboard' element={<StudentBoard />}/>
     
     </Routes>
     </>
  )
}

export default App
