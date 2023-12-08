import React from "react";
import main from "../../assets/eu.jpg";
import socialLinks from "./social-links";
import "./style.scss";
export const Sobre = () => {
  return (
    <>
      <header className="hero_sobre" id="about">
        <section className="section-center hero-center">
          <article className="hero-info">
            <div>
              <span> ✍ Abaixo um pouco </span>
              <h1>Sobre mim</h1>
              <p>
              Olá, meu nome é Leonardo Geja. 
              Sou um desenvolvedor Back End com foco principal em PHP e JavaScript, 
              e estou empenhado em expandir meus conhecimentos para o Front End. 
              Possuo experiência sólida em HTML, CSS, React JS, Next.js, Node.js, 
              Typescript e PHP, especialmente em frameworks como Laravel. 
              Meu compromisso é criar soluções de alta qualidade e estou 
              constantemente buscando desafios que me permitam crescer 
              profissionalmente. Resido Joaçaba Santa Catarina e estou 
              entusiasmado para enfrentar novos projetos e oportunidades.
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

