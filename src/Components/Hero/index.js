import React from "react";
import "./style.scss";
import socialLinks from "./social-links";
import main from "../../assets/main.svg";
const Hero = () => {
  return (
    <>
      <header className="hero" id="home">
        <section className="section-center hero-center">
          <article className="hero-info2">
            <div>
              <p>Quem sou eu</p>
              <h1>Sobre mim</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                a quod dolores accusamus cupiditate odit magni optio quasi illum
                ad quis sunt distinctio porro dolore consequuntur repellendus,
                velit animi quisquam.
              </p>
              <a href="/contact" className="btn">
                Baixar CV
              </a>
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
            </div>
          </article>
          <img src={main} alt="web dev" className="hero-img" />
        </section>
      </header>
    </>
  );
};

export default Hero;
