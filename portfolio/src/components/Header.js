import React from 'react';
import { NavLink} from 'react-router-dom';

import Profile from '../assets/profile.jpg';
import '../SASS/header.scss';

const Header = () =>{
  return(
    <div className="header-container">
      <div className="text-container">
        <img src={Profile} alt="Profile picture"/>
        <div className="text">
          <h1>Jenn Soderborg</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
      <div className="nav-container">
        <NavLink to='/' className='navlinks'>Home</NavLink>
        <NavLink to='/projects' className='navlinks'>Projects</NavLink>
        <NavLink to='/resume' className='navlinks'>Resume</NavLink>
        <NavLink to='/contact' className='navlinks'>Contact</NavLink>
      </div>
    </div>
  );
}

export default Header;

