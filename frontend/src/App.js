import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import User from './components/User'
import Admin from './components/Admin'
import Dash from './components/Dash'
import SidebarData from './components/SidebarData'
import CreateUser from './components/CreateUser'
import CreateAdmin from './components/CreateAdmin'



const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/user' element={ <User /> } /> 
          <Route path='/admin' element={ <Admin /> } /> 
          <Route path='/createuser' element={ <CreateUser /> } />
          <Route path='/createadmin' element={ <CreateAdmin /> } />
          <Route path='/dash' element={ <Dash /> } /> 
          <Route path='/SidebarData' element={ <SidebarData /> } />  
        </Routes>
    </Router>
  )
}

export default App;
