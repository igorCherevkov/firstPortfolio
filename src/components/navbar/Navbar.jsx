import React, { useState } from 'react';
import logo from '../../pictures/Home.svg';
import { BiArrowFromTop, BiArrowFromBottom } from "react-icons/bi";
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#about" id='aboutMe'>About me</a></p>
    <p><a href="#skills">Skills</a></p>
    <p><a href="#portfolio">Portfolio</a></p>
    <p><a href="#contacts">Contacts</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <div className='navbar__links-logo'>
          <img src= {logo} alt="logo" />
        </div>
        <div className='navbar__links-container'>
          <Menu />
        </div>
        <div className="navbar__menu">
        { toggleMenu
          ? <BiArrowFromTop size={27} onClick={()=>setToggleMenu(false)}/>
          : <BiArrowFromBottom size={27} onClick={()=>setToggleMenu(true)}/>
        }
        { toggleMenu && (
          <div className="navbar__menu-container scale-up-center">
            <div className="navbar__menu-container-links"><Menu /></div>
          </div>
        )
        }
      </div>
      </div>
    </div>
  )
}

export default Navbar