import React from 'react';
import '../SASS/projects.scss';
import NoiseControl from '../assets/noiseControl.PNG';
import Guidr from '../assets/guidr.PNG';
import BucketList from '../assets/bucketList.PNG';
import DesignHub from '../assets/DesignHub.PNG';

const Projects = () =>{
  return(
    <div className="projects-container">
      <div className="greeting">        
        <h1>Projects</h1>
      </div>
      <div className="project-cards">
        <div className="card">
          <h3>Noise Control</h3>
          <img src={NoiseControl} />
          <p>HTML, CSS, LESS</p>
          <div className="links">
            <a href="https://github.com/noisecontrol-lambda/Web-UI-Jenn">See the code</a>
            <a href="https://lambda-noise-control.netlify.com">See the app</a>
          </div>
        </div>
        <div className="card">
          <h3>Guidr</h3>
          <img src={Guidr} />
          <p>React, Styled Components, SASS</p>
          <div className="links">
            <a href="https://github.com/Guidr-Bwproject/Front-End/tree/master/client">See the code</a>
            <a href="https://loveguidr.netlify.com/signup">See the app</a>
          </div>
        </div>
        <div className="card">
          <h3>Bucket List</h3>
          <img src={BucketList} />
          <p>Node, Express, PostgresSQL</p>
          <div className="links">
            <a href="https://github.com/ft-build-week-bucket-list/back-end">See the code</a>
            <a href="https://bucket-list-home.netlify.com/">See the app</a>
          </div>
        </div>
        <div className="card">
          <h3>DesignHub</h3>
          <img src={DesignHub} />
          <p>React, SASS, Auth0</p>
          <div className="links">
            <a href="https://github.com/Lambda-School-Labs/designhub-fe">See the code</a>
            <a href="https://designhubx.com/">See the app</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;