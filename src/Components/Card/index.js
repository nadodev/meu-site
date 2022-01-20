import React from "react";
import "./style.scss";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
function Card() {
  return (
    <div className="card">
      <div className="hero-top">
        <img
          src="https://images.ctfassets.net/qz1k4i0kbshi/3kVecIxTIDNBwnAqa9stn1/8c277ad966be156a82fddc53961e46bb/Screen_Shot_2021-04-23_at_10.35.23_AM.png?w=600&h=312&q=50"
          alt=""
        />
      </div>
      <div className="hero-body">
        <h2>TITULO</h2>
        <div>
          <span>html</span>
          <span>Css</span>
          <span>Javascript</span>
        </div>
      </div>
      <div className="hero-footer">
        <a href="#">
          <FaGithub color="#000" size={25} />
        </a>
        <a href="#">
          {" "}
          <FiLink color="#000" size={25} />
        </a>
      </div>
    </div>
  );
}

export default Card;
