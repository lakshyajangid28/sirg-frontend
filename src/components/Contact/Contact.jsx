import React from "react";
import { contact } from "../../util/util";

const Contact = () => {
  const mail = `mailto:${contact[0].value}`
  const web = `https://${contact[1].value}`
  return (
    <div className="box" id="contact">
      <h2 className="ui top attached inverted header">Contact</h2>
      <div className="ui padded text segment" id="content-box">
        <p>
          <li>
            <a href={mail} className="footer-link">
              {contact[0].value}
            </a>
          </li>
        </p>
        <p>
          <li>
            <a
              href={web}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {contact[1].value}
            </a>
          </li>
        </p>
      </div>
    </div>
  );
};

export default Contact;
