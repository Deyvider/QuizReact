import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import electric from "../../assets/Image/electric.jpg";
import boyGuitar from "../../assets/Image/boyGuitar.jpg";

const LadingPage = () => {
  const navigation = useNavigate();
  return (
    <div>
      <section className="contener">
        <div className="row">
          <nav className="navbar">
            <h1>LearningGuitar</h1>
          </nav>
          <div className="content">
            <h1>Aprende de manera Inteligente</h1>
            <p>
              Con tan solo saber tu nivel podrás mejorar tu habilidad, para eso
              debes de medir para poder mejorar
            </p>
            <a href="#about">Más información</a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="rowA">
          <div className="col">
            <h2 id="title">Antes de Iniciar</h2>
            <h2 id="subtitle"> ¿Qué es LearningGuitar?</h2>
            <p id="paragraph">
              LearningGuitar es una aplicación web diseñada para todos aquellos
              que quieran aprender a tocar su instrumento favorito. Esta
              aplicación cuenta con un avanzado sistema de inteligencia
              artificial que te guiará en tu camino hacia la excelencia en la
              guitarra.
            </p>
            <a id="btn" href="#about-two">
              Descubre más
            </a>
          </div>
          <div className="col">
            <img src={electric} className="imagen" />
          </div>
        </div>
      </section>

      <section id="about-two">
        <div className="rowA">
          <div className="col">
            <img src={boyGuitar} className="imagen"/>
          </div>
          <div className="col">
            <h2 id="titleTwo">Antes de Iniciar</h2>
            <h2 id="subtitleTwo">¿Cómo funciona?</h2>
            <p  id="paragraphTwo">
              Para comenzar, la aplicación te solicitará que realices un quiz
              para determinar tu nivel actual de habilidad en la guitarra y tus
              preferencias musicales. Con esta información, la aplicación
              generará una ruta personalizada de aprendizaje, la cual se
              adaptará a tus necesidades y preferencias específicas.
            </p>
            <a id="btn" onClick={() => navigation ("/quiz")}>¡Comienza ya!</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LadingPage;
