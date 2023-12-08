import React from "react";
import main from "../../assets/eu.jpg";
import socialLinks from "./social-links";
import "./style.scss";
const Sobre = () => {
  return (
    <>
      <header className="hero_sobre" id="about">
        <section className="section-center hero-center">
          <article className="hero-info">
            <div>
              <span> ✍ Abaixo um pouco </span>
              <h1>Sobre mim</h1>
              <p>
              Olá, sou Leonardo Geja, um desenvolvedor Back End focado em PHP e JavaScript, atualmente estudando Front End. Com experiência em HTML, CSS, React JS, Next.js e Node.js, Typescript, PHP, Laravel, estou comprometido em criar soluções de alta qualidade. Resido em Santa Catarina e estou sempre em busca de desafios para crescer profissionalmente.
              </p>
              <a
                href="https://drive.google.com/file/d/1t710DLc0u7tOFeLTbuLOHrgBTN4JmfIB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
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
          <img src={main} alt="web dev" className="hero-img2 " />
        </section>
      </header>
    </>
  );
};

export default Sobre;
