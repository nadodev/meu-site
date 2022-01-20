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
              <p>Quem sou eu</p>
              <h1>Sobre mim</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                a quod dolores accusamus cupiditate odit magni optio quasi illum
                ad quis sunt distinctio porro dolore consequuntur repellendus,
                velit animi quisquam.
              </p>
              <a
                href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7e3c89eb-06d8-4ec7-b96d-176cd9c4490b/novoCurriculo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220120T210115Z&X-Amz-Expires=86400&X-Amz-Signature=1b56e2a17b1971eb2911cc1dbe38aef1410a96cd3513ad103d88afb8afa752b9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Curriculum.pdf%22&x-id=GetObject"
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
