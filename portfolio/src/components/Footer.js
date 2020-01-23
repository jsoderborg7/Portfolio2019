import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../SASS/footer.scss';

const Footer = () =>{
  return(
    <div className="footer-container">
      <FontAwesomeIcon icon="github" />
      <p>Jenn Soderborg &copy; 2019</p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/jsoderborg7/">
          <i class="fab fa-linkedin fa-2x" />
        </a>
        <a href="https://github.com/jsoderborg7">
          <i class="fab fa-github-square fa-2x" />
        </a>
        <a href="https://twitter.com/Jsoderborg7">
          <i class="fab fa-twitter-square fa-2x" />
        </a>
      </div>
    </div>
  )
}

export default Footer;