import React from "react";
const Contact = () => {
  return (
    <div id="contact" className="section section-contact">
      <div className="section-about--title">
        <h2>Contact</h2>
      </div>
      <div className="section-contact--copy">
        <p className="large-copy">
          Please feel free to get in touch by email or connect with me on
          LinkedIn.
        </p>

        <p>
          <a href="mailto:nobody@email.com">
            <img
              src="/assets/img/icon-email--white.svg"
              alt="Email Me"
              className="icon-email"
            />
          </a>
          <a href="mailto:nobody@email.com" rel="noreferrer">
            nobody@email.com
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/">
            <img
              src="/assets/img/icon-linked-in--white.svg"
              alt="Connect on Linked In"
              className="icon-linkedin"
            />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
