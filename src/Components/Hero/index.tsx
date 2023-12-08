import React from "react";
import main from "../../assets/main.svg";
import "./style.scss";
export const Hero = () => {
  return (
    <>
      <header className="hero " id="home">
        <section className="section-center hero-center">
          <article className="hero-info2 ">
            <div>
              <span>Prazer, Eu sou Leonardo geja ✌</span>
              <h1>DESENVOLVEDOR FRONT END</h1>
                <p>
                Este é o meu site pessoal, onde você encontrará informações sobre minha experiência, formação, detalhes de contato e muito mais.
                  <br />
                  Na próxima seção você encontra meu CV.
                </p>
              <a
                href="https://api.whatsapp.com/send?phone=5549999195407&text=Ol%C3%A1%2C%20vamos%20bater%20um%20papo%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Entrar em contato
              </a>
            </div>
          </article>
          <img src={main} alt="web dev" className="hero-img floating" />
        </section>
      </header>
    </>
  );
};

