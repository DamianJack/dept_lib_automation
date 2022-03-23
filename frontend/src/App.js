import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LogHome from './components/LogHome'
import Home from './components/Home'
import Dash from './components/Dash'
import SidebarData from './components/SidebarData'
import Create from './components/Create'


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<LogHome />} />
          <Route path='/home' element={ <Home /> } /> 
          <Route path='/create' element={ <Create /> } />
          <Route path='/dash' element={ <Dash /> } /> 
          <Route path='/SidebarData' element={ <SidebarData /> } />  
        </Routes>
    </Router>
  )
}

export default App;
