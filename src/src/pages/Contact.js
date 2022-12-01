import React from 'react';
import ContactLeftSide from "../img/contactleftside.avif";
import "../style/contact.css";

function Contact() {
  return (
    <div className="contact">
        <div className="leftside" >
              <h1> <b>Contact Us</b> </h1>

              <form id="contact-form" method ="POST">
                <label htmlFor="name">Full Name</label>
                <input name="name"  type="text"></input>
                <label htmlFor="phone">Phone Number</label>
                <input name="phone"  type="phone"></input>
                <label htmlFor="email">Email</label>
                <input name="email"  type="email"></input>
                <label htmlFor="message">Message</label>
                <textarea rows="10" placeholder="Your Message..." name="message" required></textarea>
                <button type="submit"> Send message</button>

              </form>
        </div>
        <div className="rightside" style={{backgroundImage: `url(${ContactLeftSide})`}}>
            
        </div>
    </div>
  )
}

export default Contact
