import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Dash from './components/Dash'
import DashEx from './components/DashEx'


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />  
          <Route path='/dash' element={ <Dash /> } /> 
          <Route path='/dashex' element={ <DashEx /> } />   
        </Routes>
    </Router>
  )
}

export default App;
