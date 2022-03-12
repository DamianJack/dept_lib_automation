import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import book from '../img/books.png'
import mem from '../img/members.png'
import mag from '../img/magazine.png'
import news from '../img/newspaper.png'



const H1 = styled.h1`
    background-color: #FBA313;
    padding: 0.5em;
    margin: 0 ;
    width: 98.3%;
    height: 6vh;
    display: flex;
    align-items: center;
`
const ImgButton = styled.button`
    background: none;
    border: none;
    border-radius: '50%';
    width: 13%;
    margin: 1em 4em;
    display: inline-block;
`

const Div = styled.div`
    margin:0;
    background-color: #fdfdfd5c;
    width:24em;
    height:90vh;
    display: inline-block;
`


const DashEx = () => {
    const navigate = useNavigate()
    return(
        <div>
             
             <H1 onClick={() => navigate('/dashex')} style = {{cursor: 'pointer'}}>Library Management</H1>
             
            <div style={{background:'#DEE1E5', height:'90.5vh'}}>

            <Div>

            </Div>
                <ImgButton onClick={() => navigate('/home')} className='imgbutton'>
                    <img src={book} alt=''/>
                </ImgButton>
                
                <ImgButton onClick={() => navigate('/home')} className='imgbutton'>
                    <img src={mem} alt=''/>
                </ImgButton>

                <ImgButton onClick={() => navigate('/home')} className='imgbutton'>
                    <img src={news} alt=''/>
                </ImgButton>

                <ImgButton onClick={() => navigate('/home')} className='imgbutton'>
                    <img src={mag} alt=''/>
                </ImgButton>
            
            </div>
            
            
        </div>
    )
}

export default DashEx