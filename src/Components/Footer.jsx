import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <Link to="/">
            <img src="/images/logo/DH.png" alt="Logo DH" />
          </Link>
        </div>
        <div className="footer-social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/facebook-icon.png" alt="Facebook Icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/twitter-icon.png" alt="Twitter Icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/icons/instagram-icon.png" alt="Instagram Icon" />
          </a>
        </div>
        <p className="footer-text">Powered by <strong>DH</strong></p>
      </div>
    </footer>
  );
};

export default Footer;