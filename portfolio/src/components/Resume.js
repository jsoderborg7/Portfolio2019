import React from 'react';
import '../SASS/resume.scss';

import ResumeImg from '../assets/resume.png'

const Resume = () =>{
  return(
    <div className="resume-container">
      <img src={ResumeImg} alt="Resume" />
      <a href='https://drive.google.com/file/d/1KosFNaF5NmhxDCuZYeWfKVdIDWB3u-Wn/view?usp=sharing'
      target='_blank'>
        <button>Download</button>
      </a>
    </div>
  )
}

export default Resume;