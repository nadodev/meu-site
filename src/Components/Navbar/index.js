import React from "react";
import { FaAlignRight } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import pageLinks from "./links";
import "./style.scss";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector("#nav");

      if (window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
      } else {
        navbar.classList.remove("navbar-fixed");
      }
    });

    // show sidebar
  });

  const openSide = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.add("show-sidebar");
    setOpen(true);
  };

  const closeSide = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.remove("show-sidebar");
    setOpen(false);
  };

  const menu = (link) => {
    closeSide();
    window.scrollTo({ top: link, behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <h1>LEONARDO.</h1>
            <button
              type="button"
              className="toggle-btn"
              id="nav-btn"
              onClick={() => openSide()}
            >
              <FaAlignRight />
            </button>
          </div>
          <div className="nav-links">
            {pageLinks.map((page, index) => {
              return (
                <a key={page.id} href={page.url}>
                  {page.text}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
      <aside class="sidebar" id="sidebar">
        <div>
          <button class="close-btn" id="close-btn" onClick={() => closeSide()}>
            <FiX />
          </button>
          <ul class="sidebar-links">
            <li onClick={() => menu(0)}>
              <a href="#home">home</a>
            </li>
            <li onClick={() => menu(700)}>
              <a href="#about">about</a>
            </li>
            <li onClick={() => menu(750)}>
              <a href="#projects">projects</a>
            </li>
          </ul>
          <ul class="social-icons">
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-squarespace"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
