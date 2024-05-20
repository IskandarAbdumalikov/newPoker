import React from "react";
import "./footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__left">
          <p className="footer__text">Finstreet 118 2561 Fintown</p>
          <p className="footer__text">Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="footer__right">
          <FaFacebook className="footer__icon" />
          <FaTwitter className="footer__icon" />
          <FaInstagram className="footer__icon" />
          <FaLinkedin className="footer__icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
