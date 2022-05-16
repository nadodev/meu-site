import React from "react";
import imagem01 from "../../assets/1.png";
import imagem02 from "../../assets/2.png";
import imagem03 from "../../assets/3.png";
import imagem04 from "../../assets/4.png";
import imagem05 from "../../assets/5.png";
import Card from "../Card";
import "./style.scss";
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
                  link="https://lojavirtual-dot.vercel.app/"
                  tag1="HTML"
                  tag2="React"
                  tag3="SCSS"
                />
                <Card
                  image={imagem02}
                  title="Gerenciador De Tarefas"
                  git="https://github.com/nadodev/todofront"
                  link="https://tasksforday.herokuapp.com/sincronizar"
                  tag1="React"
                  tag2="SCSS"
                  tag3="Api Node"
                />
                <Card
                  image={imagem03}
                  title="Acervo de filmes"
                  git="https://github.com/nadodev/filmeapi"
                  link="https://sinopsefilmesapi.vercel.app/"
                  tag1="React"
                  tag2="Api Externa"
                  tag3="SCSS"
                />
                <Card
                  image={imagem04}
                  title="Gerenciador de Tarefas"
                  git="https://github.com/nadodev/tarefas-redux-context"
                  link="https://tarefa.leonardogeja.dev.br/"
                  tag1="React"
                  tag2="Redux"
                  tag3="SCSS"
                />
                <Card
                  image={imagem05}
                  title="Site Pessoal"
                  git=""
                  link="https://leonardogeja.dev.br/"
                  tag1="HTML"
                  tag2="JAVASCRIPT"
                  tag3="SCSS"
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
