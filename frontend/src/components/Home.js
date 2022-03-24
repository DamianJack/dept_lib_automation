import React from 'react'
import {useNavigate} from 'react-router-dom'

import styled from 'styled-components'

import student from '../img/students.png'
import faculty from '../img/faculty.png'
import back from '../img/back.jpg.crdownload'

const Div = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url(${back});
    display: flex;
    flex-direction: row;
    height: 100vh;
  `


const LogHome = () => {

    const navigate = useNavigate()

  return (

    <Div>
        <div style={{width:'50%' ,margin: '8em'}}>
            <button onClick={ () => navigate('/student')} style={{background:'none',border:'none',cursor:'pointer'}}>
                <img src={student} alt=''/>
            </button>
        </div>
        <div style={{width:'50%' ,margin: '8em'}}>
            <button onClick={ () => navigate('/faculty')}  style={{background:'none',border:'none',cursor:'pointer'}}>
                <img src={faculty} alt=''/>
            </button>
        </div>
    </Div>
  )
}

export default LogHome