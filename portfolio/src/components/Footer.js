import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../SASS/footer.scss';

const Footer = () =>{
  return(
    <div className="footer-container">
      <FontAwesomeIcon icon="github" />
      <p>Jenn Soderborg &copy; 2019</p>
    </div>
  )
}

export default Footer;