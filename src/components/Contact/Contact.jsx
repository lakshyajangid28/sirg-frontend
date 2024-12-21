import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <a href="mailto:example@email.com" className="footer-link">
          example@email.com
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          www.example.com
        </a>
      </div>
    </footer>
  );
};

export default Contact;
