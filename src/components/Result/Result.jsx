import React, { useState } from "react";
import "./style.css";
import quizData from "../../assets/Data/quizData";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Answer from "../Answer";

const Result = ({ level }) => {
  const genres = quizData[quizData.length - 1];
  const navigation = useNavigate();

  const [selectedGenere, setSelectedGenere] = useState("");

  const OnChoicePressed = (choice) => {
    
   if(!choice){
      return;
    }
    
    setSelectedGenere(choice)
  }


  return (
    <div id="base">

      <div className="titles">
        <h1 id="h1">Tu ruta de aprendizaje</h1>
        <p className="sub-title">Tu nivel es: {level}</p>
      </div>

      <div className="square-blue">
        <h2>¿Qué te gustaría dominar? </h2>
        <div className="butons">
          {genres.answer.map((gn) => {
            return(
             <Answer 
              choice={gn}
              OnPress={() => OnChoicePressed(gn)}
              isSelected={selectedGenere.includes(gn)}
            />);
          })}
        </div>
      </div>
      <a id="btnContinue" onClick={() => navigation(`/roadmap/${level}/${selectedGenere}`)}>Continuar</a>
    </div>
  );
};

export default Result;
