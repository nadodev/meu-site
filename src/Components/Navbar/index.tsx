import React, { useRef } from "react";
import { FaAlignRight } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import pageLinks from "./links";
import "./style.scss";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [navbar, setNavBar] = React.useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null); 

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavBar(true);
      }else {
        setNavBar(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

    // show sidebar

  const openSide = () => {
    setOpen(true);
  };

  const closeSide = () => {
    setOpen(false);
  };

  const menu = (link: number) => {
    closeSide();
  };

  return (
    <>
      <nav className={`navbar ${navbar ? 'navbar-fixed' : ''}`} id="nav" ref={sidebarRef}>
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
      <aside className={`sidebar ${open ? 'show-sidebar' : ''}`} id="sidebar">
        <div>
          <button className="close-btn" id="close-btn" onClick={() => closeSide()}>
            <FiX />
          </button>
          <ul className="sidebar-links">
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
          <ul className="social-icons">
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
