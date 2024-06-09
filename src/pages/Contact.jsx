import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact" id="Contact">
        <p className="contact_title">
          <span>Contact</span>
        </p>
        <div className="contact-icons flex">
          <a href="www.linkedin.com" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="www.github.com" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="www.youtube.com" target="_blank">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="tel:0410263444">
            <i className="fa-solid fa-mobile"></i>
          </a>
        </div>
        <h3>OR</h3>
        <div className="email-section">
          <a href="mailto:real@email.com">
            <span>your-email@gmail.com</span>
          </a>
          <div className="send">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
