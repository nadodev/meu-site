import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import "./style.scss";


interface ICard {
  image: string
  title:string
  git:string
  link:string
  tag1:string
  tag2:string
  tag3:string
}


function Card({ image, title, link, git, tag1, tag2, tag3 }: ICard) {
  const linkGit = git ? '' : 'sem-link' ;
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
        <>
        <a
          href={git}
          target="_blank"
          className={linkGit}
          rel="noopener noreferrer"
          onClick={git ? undefined  : (e) => e.preventDefault()}
        >
          <FaGithub color="#000" size={25} />
        </a>
       
        </>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FiLink color="#000" size={25} />
        </a>
      </div>
    </div>
  );
}

export default Card;
