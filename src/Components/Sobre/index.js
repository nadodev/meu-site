import React from "react";
import "./style.scss";
import socialLinks from "./social-links";
import main from "../../assets/eu.jpg";
const Sobre = () => {
  return (
    <>
      <header className="hero_sobre" id="about">
        <section className="section-center hero-center">
          <article className="hero-info">
            <div>
              <p>Quem sou eu</p>
              <h1>Sobre mim</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                maiores illum quaerat eos voluptatibus architecto sint ratione,
                debitis corporis, autem incidunt ex eum amet! Doloremque
                dignissimos vel asperiores saepe labore.
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
          <img src={main} alt="web dev" className="hero-img2" />
        </section>
      </header>
    </>
  );
};

export default Sobre;
