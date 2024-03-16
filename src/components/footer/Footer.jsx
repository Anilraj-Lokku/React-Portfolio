import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Anilraj Lokku
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Education & Certifications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="http://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagramSquare />
        </a>
        <a href="http://twitter.com" target="_blank" rel="noreferrer">
          <FaSquareXTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small className="text-align">
          &copy; Anilraj Lokku. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
