import React from "react";

const Contact = () => {
  return (
    <div className="box" id="contact">
      <h2 className="ui top attached inverted header">Contact</h2>
      <div className="ui padded text segment">
        <p>
          <li>
            <a href="mailto:example@email.com" className="footer-link">
              example@email.com
            </a>
          </li>
        </p>
        <p>
          <li>
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              www.example.com
            </a>
          </li>
        </p>
      </div>
    </div>
  );
};

export default Contact;
