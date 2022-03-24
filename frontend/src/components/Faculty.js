import {useState} from 'react'
import {useNavigate,NavLink,Link} from 'react-router-dom'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'
import styled from 'styled-components'
import Axios from 'axios'

import lib from '../img/faculty.webp'

const Div = styled.div`
    display: flex;
    height: 98vh;
    overflow: hidden;
 `   

const Icon = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 60px;
    margin: 0.3em 18.5em;
`
const P = styled.p`
    background: #D6382E;
    margin:auto;
    width:400px;
    height:400px;
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
    background: #896221;
    border: black;
    border-radius: 3px;
    box-shadow:2px 2px 5px grey;
    width: 25%;
    padding :0.3em ;
    margin: 2em auto;
    text-align:center;
    
`
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`
const Right = styled.div`
  width: 75%;
`
const PolygonShape = styled.div`
  width: 50%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  background-color: #D6382E;
  z-index: -1
`

const SocialMedia = styled.section`
  width: 100%;
  margin: 0em 13em;
`

const SocialMediaWrap = styled.div`
  display: flex;
  justify-contents: space-between;
  align-items: center;
  margin: 0em 20em;
`

const WebsiteRights = styled.small`
  color: black;
  margin: 0em 10em;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin: 0em 0em;
`

const SocialIconLink = styled.a`
  color: black;
  font-size: 24px;
`

const Home = () => {
    
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

        
    const login = () => {
        Axios.post("http://localhost:3001/login",{
            username:username,
            password:password
        }).then((response) => {
            console.log(response);
            if(!response.error) {
                navigate('/dash')
            }
        });
    };
    
    return ( 
        <Div>
            <Left>
                <img src = {lib} style={{width:'200%',margin:'8em 4em'}} alt=''/>
                <PolygonShape></PolygonShape>
            </Left>
            <Right>
                <Icon>
                <NavLink to='/' style={{textDecoration:'none'}}>BiblioTheca</NavLink>
                </Icon>
                <P style={{margin:'10em 45em'}}> 
                <form>
                <h1>Faculty Login</h1>
                <p><Input type="text" name="uid" placeholder="E-MAIL" 
                onChange={(e) => {
                    setUsername(e.target.value);
                }}/></p>
                <p><Input type="text" name="pass" placeholder="PASSWORD" 
                onChange={(e) => {
                    setPassword(e.target.value);
                }}/></p>
                <Button type="submit" onClick={login} className='button'>LOGIN</Button>
                </form>
                <p><NavLink to='' style={{textDecoration: 'none', color:'whitesmoke'}}>Forgot Password</NavLink></p>
                <NavLink to="/create" style={{textDecoration: 'none', color:'whitesmoke'}}>Create Account</NavLink>
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
            </Right>
           
        </Div>

    
    )
}


export default Home