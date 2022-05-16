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
                Olá meu nome é Leonardo Geja, tenho 31 anos. atualmente moro no
                interior de santa catarina, e trabalho como desenvolvedor Front
                End. Curso UX/UI Designer/Front End na EBAC - SP, e sou
                apaixonado por Back End/Front, e levo a vida de um autodidata.
                Tenho conhecimento de HTML, CSS, REACT JS ,NEXTJS e NODE JS
                ,entre outros.
              </p>
              <a
                href="https://leonardogeja.dev.br/novoCurriculo.pdf"
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
