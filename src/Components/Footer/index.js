import React from "react";
import "./style.scss";
import socialLinks from "./social-links";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="social-links">
          {socialLinks.map((link, index) => {
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
        <p>COPYRIGHTÂ©2022 LEONARDO GEJA - ALL RIGHTS RESERVED</p>
      </footer>
    </>
  );
};

export default Footer;
