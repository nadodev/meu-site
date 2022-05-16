import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/leonardo-geja-000a34201/",
  },
  {
    id: 2,
    icon: <AiFillGithub className="social-icon"></AiFillGithub>,
    url: "https://www.github.com/nadodev/",
  },

  {
    id: 3,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.behance.net/nadojbabbc0",
  },

  {
    id: 4,
    icon: <AiFillInstagram className="social-icon"></AiFillInstagram>,
    url: "https://www.instagram.com/leonardo_geja/",
  },
];

export default data;
