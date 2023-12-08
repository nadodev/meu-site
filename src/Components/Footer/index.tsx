import React from "react";
import "./style.scss";
import socialLinks from "./social-links";
export const Footer = () => {
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
        <p>COPYRIGHT©2023 LEONARDO GEJA - ALL RIGHTS RESERVED</p>
      </footer>
    </>
  );
};

