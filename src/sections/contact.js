import React from 'react';
import './contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Have a project in mind or want to collaborate? Reach out to me through any of the platforms below.</p>

      <div className="contact-links">
        <a href="mailto:madhumylapalli9393@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope className="contact-icon" /> Email
        </a>
        <a href="https://www.linkedin.com/in/mylapalli-madhu-498061324/" target="_blank" rel="noreferrer">
          <FaLinkedin className="contact-icon" /> LinkedIn
        </a>
        <a href="https://github.com/Madhuritgithub" target="_blank" rel="noreferrer">
          <FaGithub className="contact-icon" /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
