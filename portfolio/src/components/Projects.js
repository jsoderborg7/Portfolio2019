import React, {useState} from 'react';
import '../SASS/projects.scss';
import NoiseControl from '../assets/noiseControl.PNG';
import Guidr from '../assets/guidr.PNG';
import BucketList from '../assets/bucketList.PNG';
import DesignHub from '../assets/DesignHub.PNG';
import Modal from 'react-modal';

const Projects = () =>{

  const [showDH, setShowDH] = useState(false);
  const [showNC, setShowNC] = useState(false);
  const [showG, setShowG] = useState(false);
  const [showBL, setShowBL] = useState(false);

  const openDH = () =>{setShowDH(true);};
  const closeDH = () =>{setShowDH(false);};

  const openNC = () =>{setShowNC(true);};
  const closeNC = () =>{setShowNC(false);};

  const openG = () =>{setShowG(true);};
  const closeG = () =>{setShowG(false);};

  const openBL = () =>{setShowBL(true);};
  const closeBL = () =>{setShowBL(false);};

  return(
    <div className="projects-container">
      <Modal className="modal" isOpen={showDH} onRequestClose={closeDH}>
        <span onClick={closeDH}>X</span>
        <h3>DesignHub</h3>
        <p>DesignHub is a platform for UX/UI designers to collaborate and showcase their work. I primarily worked on the frontend using React and SASS.</p>
        <div className="icons">
          <i class="fab fa-react fa-2x"></i>
          <i class="fab fa-sass fa-2x"></i>
          <i class="fab fa-node-js fa-2x"></i>
        </div>
        <div className="buttons">
          <button>
            <a href='https://designhubx.com/'>View App</a>
          </button>
          <button>
            <a href='https://github.com/orgs/Lambda-School-Labs/teams/labs-18-designhub/repositories'>View Code</a>
          </button>
        </div>
      </Modal>
      <Modal className="modal" isOpen={showNC} onRequestClose={closeNC}>
        <span onClick={closeNC}>X</span>
        <h3>Noise Control</h3>
        <p>Noise control is an app for teachers to encourage their students to keep the noise level reasonable. My role on this project was creating the marketing/landing page using HTML and CSS.</p>
        <div className="icons">
          <i class="fab fa-html5 fa-2x"></i>
          <i class="fab fa-css3 fa-2x"></i>
        </div>
        <div className="buttons">
          <button>
            <a href='https://lambda-noise-control.netlify.com/'>View App</a>
          </button>
          <button>
            <a href='https://github.com/noisecontrol-lambda/Web-UI-Jenn'>View Code</a>
          </button>
        </div>
      </Modal>
      <Modal className="modal" isOpen={showG} onRequestClose={closeG}>
        <span onClick={closeG}>X</span>
        <h3>Guidr</h3>
        <p>Guidr is a platform for outdoor guides to share and advertise their trips and skills. I was part of the frontend team using React, Styled Components, and SASS.</p>
        <div className="icons">
          <i class="fab fa-react fa-2x"></i>
          <i class="fab fa-sass fa-2x"></i>
        </div>
        <div className="buttons">
          <button>
            <a href='https://loveguidr.netlify.com/signup'>View App</a>
          </button>
          <button>
            <a href='https://github.com/Guidr-Bwproject/Front-End'>View Code</a>
          </button>
        </div>
      </Modal>
      <Modal className="modal" isOpen={showBL} onRequestClose={closeBL}>
        <span onClick={closeBL}>X</span>
        <h3>Bucket List</h3>
        <p>Bucket List is an app to help individuals and families track their bucket list items, and share completed adventures. My part in this project was building the backend using Node, Express, and PostgresSQL.</p>
        <div className="icons">
          <i class="fab fa-node-js fa-2x"></i>
        </div>
        <div className="buttons">
          <button>
            <a href='https://bucket-list-home.netlify.com/'>View App</a>
          </button>
          <button>
            <a href='https://github.com/ft-build-week-bucket-list/back-end'>View Code</a>
          </button>
        </div>
      </Modal>
      <div className="greeting">        
        <h1>Projects</h1>
      </div>
      <div className="project-cards">
        <div className="card" onClick={openDH}>
          <div className="overlay-container">
            <img src={DesignHub} />
            <div className="overlay">
              <p>See details</p>
            </div>
          </div>
          <h3>DesignHub</h3>
        </div>
        <div className="card" onClick={openNC}>
        <div className="overlay-container">
            <img src={NoiseControl} />
            <div className="overlay">
              <p>See details</p>
            </div>
          </div>
          <h3>Noise Control</h3>
        </div>
        <div className="card" onClick={openG}>
        <div className="overlay-container">
            <img src={Guidr} />
            <div className="overlay">
              <p>See details</p>
            </div>
          </div>
          <h3>Guidr</h3>
        </div>
        <div className="card" onClick={openBL}>
        <div className="overlay-container">
            <img src={BucketList} />
            <div className="overlay">
              <p>See details</p>
            </div>
          </div>
          <h3>Bucket List</h3>
        </div>
      </div>
    </div>
  )
}

export default Projects;