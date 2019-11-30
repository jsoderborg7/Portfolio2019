import React from 'react';

import '../SASS/contact.scss';

const Contact = () =>{
  return(
    <div className="contact-container">
      <p>Talk to me!</p>
      <form action="https://formspree.io/mrgbpqop" method="POST">
        <div className="contact-field">
          <label>
            Name:
          </label>
          <input type="text" name="name"/>
        </div>
        <div className="contact-field">
          <label>
            Email:
          </label>
          <input type="text" name="_replyto"/>
        </div>
        <div className="contact-field">
          <label>
            Message:
          </label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact;