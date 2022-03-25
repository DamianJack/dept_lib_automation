import React,{useState} from 'react'
import {useNavigate,NavLink,Link} from 'react-router-dom'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'
import styled from 'styled-components'
import Axios from 'axios'

import lib from '../img/student.png'

const Div = styled.div`
    display: flex;
    height: 98vh;
    overflow: hidden;
 `   

const Icon = styled.div`
    font-size: 60px;
    margin: 0.30em;
`
const P = styled.p`
    background: #DEDE4A;
    width:400px;
    height:300px;
    box-shadow: 2px 2px 10px black;
    padding: 40px;
    text-align: center;
`
const Input = styled.input`
    font-size:15px;
    width:65%;
    padding :0.5em ;
    margin:1em auto;
    border-radius: 4px;
    border:none;
    box-shadow:2px 2px 10px grey;
    text-align:center;
`

const Button = styled.button`
    background: #ee7431;
    border: black;
    border-radius: 3px;
    box-shadow:2px 2px 5px grey;
    width: 25%;
    padding :0.3em ;
    margin: 2em auto;
    text-align:center;
    
`

const Left = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`
const Right = styled.div`
  width: 50%;
`
const PolygonShape = styled.div`
  width: 50%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  background-color: #DEDE4A;
  z-index: -1
`

const SocialMedia = styled.section`
  width: 100%;
`

const SocialMediaWrap = styled.div`
  display: flex;
  justify-contents: space-between;
  align-items: center;
`

const WebsiteRights = styled.small`
  color: black;
  margin: 6em 10em ;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin:10.5em 3em;
`

const SocialIconLink = styled.a`
  color: black;
  font-size: 24px;
`



const Home = (props) => {
    
    const navigate = useNavigate()
    const [unameReg, setUnameReg] = useState("");
    const [passReg, setPassReg] = useState("");
    const [notification, setNotification] = useState('')


const register = e => {
    e.preventDefault()
    console.log('Login form')
        if(unameReg == '' || passReg == '')
            return

    Axios.post("http://localhost:3001/registeruser",{
        username:unameReg,
        password:passReg
    }).then((response) => {
        console.log(response);
        if(!response.data.error) {
            navigate('/user')
        }
        else {
            setNotification(response.data.error)
        }
    });
};
    
    return (
        
            
        <Div>
            <Left>
                <Icon>
                <NavLink to='/' style={{textDecoration:'none'}}>BiblioTheca</NavLink>
            </Icon>
            <P style={{margin:'8em 12em'}}> 
            <form >
            <h1>Create User Account</h1>
            <p><Input type="text" name="uid" placeholder="E-MAIL" 
                        onChange={(e) => {
                            setUnameReg(e.target.value);
                        }}/></p>
            <p><Input type="text" name="pass" placeholder="PASSWORD" 
                        onChange={(e) => {
                            setPassReg(e.target.value);
                        }}/></p>
            <Button type="submit" onClick={register} className='button'>Register</Button>
            </form>
            </P>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights> BiblioTheca © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            </Left>
            <Right>
                <img src = {lib} style={{width:'80%',margin:'7.5em -2em'}} alt=''/>
                <PolygonShape></PolygonShape>
            </Right>
            
        
            
        </Div>
        
    )
}


export default Home