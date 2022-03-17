import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import styled from 'styled-components'

import book from '../img/books.png'
import mem from '../img/members.png'
import mag from '../img/magazine.png'
import news from '../img/newspaper.png'

import './Dash.css';


const ImgButton = styled.button`
    background: none;
    border: none;
    border-radius: '50%';
    width: 13%;
    margin: 5em 8em;
    display: inline-block;
`



function Dash() {
    const navigate = useNavigate()
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            
          </div>
          <div>
                  <ImgButton onClick={() => navigate('/exp')} className='imgbutton'>
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
              <div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          </div>
        </IconContext.Provider>
      </>
    );
  }
  
  export default Dash;