import React from 'react';
import Profile from '../assets/profile.jpg';
import '../SASS/home.scss';

const Home = () =>{
  return(
    <div className="home-container">
      <div className="greeting">        
        <h1>About Me</h1>
      </div>
      <div className="about">
        <img src={Profile} alt="Profile picture"/>
        <div className="about-text">
          <p>I have a working knowledge of full stack, but I particularly enjoy doing frontend work because of the creativity involved. Styling is my jam!</p>
          <p>When I'm not coding, I love being outdoors, baking, reading, and spending time with friends and family.
          </p>
          <p>Prior to my career change to web development, I worked in emergency medicine as a paramedic. I also have prior experience in hospitality and customer service.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;