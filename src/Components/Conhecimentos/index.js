import React from "react";
import "./style.scss";
import imagem01 from "../../assets/1.png";
import imagem02 from "../../assets/2.png";
import imagem03 from "../../assets/3.png";
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
                <Card
                  image={imagem01}
                  title="Loja Virtual"
                  git="https://github.com/nadodev/projeto-filmes-tmdb"
                  link="https://lojavirtual-dot.herokuapp.com/"
                  tag1="HTML"
                  tag2="React"
                  tag3="Sass"
                />
                <Card
                  image={imagem02}
                  title="Gerenciador De Tarefas"
                  git="https://github.com/nadodev/todofront"
                  link="https://tasksforday.herokuapp.com/sincronizar"
                  tag1="React"
                  tag2="Sass"
                  tag3="Api Node"
                />
                <Card
                  image={imagem03}
                  title="Acervo de filmes"
                  git="https://github.com/nadodev/filmeapi"
                  link="https://sinopsefilmesapi.vercel.app/"
                  tag1="React"
                  tag2="Api Externa"
                  tag3="Sass"
                />
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Conhecimentos;
