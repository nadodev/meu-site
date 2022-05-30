import React from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import imagem01 from "../../assets/1.png";
import imagem02 from "../../assets/2.png";
import imagem03 from "../../assets/3.png";
import imagem04 from "../../assets/4.png";
import imagem05 from "../../assets/5.png";
import imagem06 from "../../assets/6.png";
import imagem07 from "../../assets/7.png";
import imagem08 from "../../assets/8.png";
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
              <Swiper
                pagination={{
                  type: "custom",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                slidesPerView={3}
                spaceBetween={50}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  366: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                <SwiperSlide>
                  <Card
                    image={imagem01}
                    title="Loja Virtual"
                    git="https://github.com/nadodev/projeto-filmes-tmdb"
                    link="https://lojavirtual-dot.vercel.app/"
                    tag1="HTML"
                    tag2="React"
                    tag3="SCSS"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Card
                    image={imagem02}
                    title="Gerenciador De Tarefas"
                    git="https://github.com/nadodev/todofront"
                    link="https://tasksforday.herokuapp.com/sincronizar"
                    tag1="React"
                    tag2="SCSS"
                    tag3="Api Node"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Card
                    image={imagem03}
                    title="Acervo de filmes"
                    git="https://github.com/nadodev/filmeapi"
                    link="https://sinopsefilmesapi.vercel.app/"
                    tag1="React"
                    tag2="Api Externa"
                    tag3="SCSS"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    image={imagem04}
                    title="Gerenciador de Tarefas"
                    git="https://github.com/nadodev/tarefas-redux-context"
                    link="https://tarefa.leonardogeja.dev.br/"
                    tag1="React"
                    tag2="Redux"
                    tag3="SCSS"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Card
                    image={imagem05}
                    title="Site Pessoal"
                    git=""
                    link="https://leonardogeja.dev.br/"
                    tag1="HTML"
                    tag2="JAVASCRIPT"
                    tag3="SCSS"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Card
                    image={imagem06}
                    title="Site Wifreframe"
                    git="https://github.com/nadodev/projeto-wireframe"
                    link="https://wireframe.leonardogeja.dev.br/"
                    tag1="HTML"
                    tag2="JAVASCRIPT"
                    tag3="SCSS"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    image={imagem07}
                    title="Site de um desafio entre amigos"
                    git="https://github.com/nadodev/lading-page-massa"
                    link="https://massa.leonardogeja.dev.br/"
                    tag1="HTML"
                    tag2="JAVASCRIPT"
                    tag3="SCSS"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Card
                    image={imagem08}
                    title="Site banco Neon (Construção)"
                    git="https://github.com/nadodev/projeto-neon"
                    link="https://www.neon.leonardogeja.dev.br/"
                    tag1="HTML"
                    tag2="JAVASCRIPT"
                    tag3="SCSS"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Conhecimentos;
