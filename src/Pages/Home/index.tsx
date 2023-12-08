import React from "react";
import {Conhecimentos} from "../../Components/Conhecimentos";
import {Footer} from "../../Components/Footer";
import {Sobre} from "../../Components/Sobre";
import "./style.scss";
export const Home = () => {
  return (
    <div className="home">
      <Sobre />
      <Conhecimentos />
      <Footer />
    </div>
  );
};
