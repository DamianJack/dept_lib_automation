import React from 'react'
import styled from 'styled-components'


const H1 = styled.h1`
    background-color: #FBA313;
    padding: 0.5em;
    margin: 0 ;
    width: 98.3%;
    height: 6vh;
    display: flex;
    align-items: center;
`


const Button = styled.button`
    margin:6em;
    width:250px;
    height:150px;
    box-shadow: 2px 2px 10px black;
    text-align: center;
    display: inline-block;

`
const Dash = () => {
    
    return(
        <div>
            <H1>Library Management</H1>
            <div style={{background:'#DEE1E5', height:'90.5vh'}}>
            <div>
                <Button style={{background:'#1A99A7'}}>Books</Button>
                <Button style={{background:'#0F982F'}}>Members</Button>
                <Button style={{background:'#DD890E'}}>NewsPaper</Button>
                <Button style={{background:'#BA1804'}}>Magazines</Button>
            </div>
            <div>
                <Button style={{background:'blue'}}></Button>
                <Button style={{background:''}}></Button>
                
            </div>
            </div>
        </div>
    )
}

export default Dash