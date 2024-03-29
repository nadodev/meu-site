import React from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import imagem03 from "../../assets/3.png";
import imagem04 from "../../assets/4.png";
import imagem05 from "../../assets/5.png";
import imagem06 from "../../assets/6.png";
import imagem08 from "../../assets/8.png";

import Card from "../Card";
import "./style.scss";

export const Conhecimentos = () => {
  return (
    <>
      <div className="conhecimentos" id="projects">
        <section className="section-center">
          <article className="hero-info">
            <div className="hero-card">
              <h1>Projetos</h1>
              <p>Alguns projetos realizado durante minha carreira</p>
              <Swiper
                pagination={{
                  type: "custom",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                slidesPerView={3}
                spaceBetween={50}
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
                    link="https://tarefas-redux-context.vercel.app/"
                    tag1="React"
                    tag2="Redux"
                    tag3="SCSS"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Card
                    image={imagem05}
                    title="Site Pessoal (Em construção)"
                    git=""
                    link="https://novo-site-sage.vercel.app/"
                    tag1="VUE"
                    tag2="JAVASCRIPT"
                    tag3="TAILWINDCSS"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Card
                    image={imagem06}
                    title="Site Wifreframe"
                    git="https://github.com/nadodev/projeto-wireframe"
                    link="https://projeto-curso-html.vercel.app/"
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
                    link="https://projeto-wireframe-vlei.vercel.app/#"
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

