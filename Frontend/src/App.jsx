import { useState } from 'react'
import { lazy } from 'react'
import './App.css'
import Login from './Components/LoginPage/Login'
import { Route, Routes } from 'react-router'
const StudentBoard = lazy(() => import('./Components/StudentDash/StudentBoard'))
import TeacherBoard from './Components/TeacherDash/TeacherDash';
function App() {

  return (
    <>
     <Routes>
      <Route path='' element={<Login />} />
      <Route path='/studentdashboard' element={<StudentBoard />}/>
      <Route path='/teacherdashboard' element={<TeacherBoard />}/>
     </Routes>
     </>
  )
}

export default App
