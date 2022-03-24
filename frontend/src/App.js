import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Student from './components/Student'
import Faculty from './components/Faculty'
import Dash from './components/Dash'
import SidebarData from './components/SidebarData'
import Create from './components/Create'


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/student' element={ <Student /> } /> 
          <Route path='/faculty' element={ <Faculty /> } /> 
          <Route path='/create' element={ <Create /> } />
          <Route path='/dash' element={ <Dash /> } /> 
          <Route path='/SidebarData' element={ <SidebarData /> } />  
        </Routes>
    </Router>
  )
}

export default App;
