import React from 'react';
import { NavLink} from 'react-router-dom';

import Profile from '../assets/profile.jpg';
import '../SASS/header.scss';

const Header = () =>{
  return(
    <div className="header-container">
      <div className="text-container">
        {/* <img src={Profile} alt="Profile picture"/> */}
        <div className="text">
          <div className="greeting">
            <p>Hi! I'm<h1>Jenn Soderborg</h1></p>
            
          </div>
          <div className="small-text">
            <p>I'm a<h2>Web Developer</h2>from Utah.</p>
            <p>When I'm not coding, I love all things water, baking, and music. Thanks for stopping by!</p>      </div>        
        </div>
      </div>
      <div className="nav-container">
        <NavLink to='/projects' className='navlinks'>Projects</NavLink>
        <NavLink to='/resume' className='navlinks'>Resume</NavLink>
        <NavLink to='/contact' className='navlinks'>Contact</NavLink>
        <NavLink to='/' className='navlinks'>About</NavLink>
      </div>
    </div>
  );
}

export default Header;
