import React from "react";
import "./style.scss";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
function Card({ image, title, link, git, tag1, tag2, tag3 }) {
  return (
    <div className="card">
      <div className="hero-top">
        <img src={image} alt="" />
      </div>
      <div className="hero-body">
        <h2>{title}</h2>
        <div>
          <span>{tag1}</span>
          <span>{tag2}</span>
          <span>{tag3}</span>
        </div>
      </div>
      <div className="hero-footer">
        <a href={git} target="_blank" rel="noopener noreferrer">
          <FaGithub color="#000" size={25} />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FiLink color="#000" size={25} />
        </a>
      </div>
    </div>
  );
}

export default Card;
