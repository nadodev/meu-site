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
              <span>Prazer, Eu sou ✌</span>
              <h1>Leonardo Geja</h1>
              <p>
                Esse é meu site pessoal. Aqui você pode ver algumas informações
                sobre mim, como experiência, formação, contato e muito mais.
                Abaixo tem meu CV, você pode baixar e imprimir.
              </p>
              <a
                href="https://1drv.ms/b/s!Ag-SnsjPMhjivwN8rEDW3laRWv_J?e=xaAI7W"
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
          <img src={main} alt="web dev" className="hero-img" />
        </section>
      </header>
    </>
  );
};

export default Hero;
