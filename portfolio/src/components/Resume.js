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

        <a href='https://drive.google.com/file/d/1qlhNH8dqxzUOcxyaMKuFn7Q8r4mjDfTf/view?usp=sharing'
        target='_blank'>
          <button>Download</button>
        </a>
      </div>
    </div>
  )
}

export default Resume;