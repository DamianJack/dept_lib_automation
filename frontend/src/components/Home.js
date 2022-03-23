import {useState} from 'react'
import {useNavigate,NavLink} from 'react-router-dom'
import styled from 'styled-components'
import Axios from 'axios'

import lib from '../img/lib.jpg'

const Div = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url(${lib});
    background-size: 100% 100%;
    margin: 0;
    padding: 0 ;
    width: 100%;
    height: 100vh;
    display: flex; 
 `   

const P = styled.p`
    background: #171516ad;
    margin:auto;
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
    background: #7F4806;
    border: black;
    border-radius: 3px;
    box-shadow:2px 2px 5px grey;
    width: 25%;
    padding :0.3em ;
    margin: 2em auto;
    text-align:center;
`

const H1 = styled.h1`
    background-color: #fdfdfd5c;
    padding: 0.5em;
    margin: 0 ;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
`


const Home = (props) => {
    
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
            
            <row style={{width:'98.3%'}}>
            <H1>Biblio<span style={{color: '#7F4806'}}>Theca</span></H1>
            <P style={{margin:'4em auto'}}> 
            <form >
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
            </row>
            
        </Div>
        
    )
}


export default Home