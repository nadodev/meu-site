import React from "react";
import "./style.scss";
import Card from "../Card";
const Conhecimentos = () => {
  return (
    <>
      <div className="conhecimentos" id="projects">
        <section className="section-center">
          <article className="hero-info">
            <div className="hero-card">
              <h1>Projetos</h1>
              <p>Alguns Projetos feito em meus cursos</p>
              <div className="wrapper">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Conhecimentos;
