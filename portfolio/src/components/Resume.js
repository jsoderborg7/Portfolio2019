import React from 'react';
import '../SASS/resume.scss';
import {PDFReader} from 'reactjs-pdf-reader';

import ResumePDF from '../assets/resume.pdf'

const Resume = () =>{
  return(
    <div className="resume-container">
      <div className="greeting">        
        <h1>Resume</h1>
      </div>
      <div className="resume-box">
        <PDFReader
          url={ResumePDF}
        />

        <a href='https://drive.google.com/file/d/1x-_o7wECZDm11r3Wr6l5UnuZv8qGRUZ7/view?usp=sharing'>
          <button>Download</button>
        </a>
      </div>
    </div>
  )
}

export default Resume;