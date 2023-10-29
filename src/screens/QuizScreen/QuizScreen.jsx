import React, { useEffect, useState } from "react";
import quizData from "../../assets/Data/quizData";
import Answer from "../../components/Answer/";
import "./Style.css";
import Result from "../../components/Result";
import { useNavigate } from "react-router-dom";

const QuizScreen = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = quizData[questionIndex];
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [currSelectedChoice, setCurrSelectedChoice] = useState({});
  const [level, setLevel] = useState("");
  const [score, setScore] = useState(0.1);
  const [genre, setGenre] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const navigation = useNavigate();

  // Voy a declarar una variable que nos dira si el botón estara activo y sera true si ya seleccionaste algo
  
  const OnChoicePressed = (choice) => {
    if (!question) {
      return;
    }

    setCurrSelectedChoice(choice);
    setSelectedChoices((currentSelectedChoices) => {
      if (currentSelectedChoices.includes(choice)) {
        return currentSelectedChoices.filter((answer) => {
          answer != choice;
        });
      } else {
        if (question.answer && question.answer.length > 1) {
          return [...currentSelectedChoices, choice];
        } else {
          return [choice];
        }
      }
    });
    setIsAnswered(true)
  };

  const getLevel = () => {
    if (!score) {
      return;
    }
    switch (true) {
      case (score >= 0 && score <= 0.3):
        setLevel('Principiante');
        break;
      case (score > 0.3 && score <= 0.6):
        setLevel('Intermedio');
        break;
      case (score > 0.6 && score <= 1):
        setLevel('Avanzado');
        break;
      default:
        // Si el valor del score está fuera del rango de 0 a 1, podrías lanzar una excepción o manejar el error de otra forma.
        break;
    }
  };

  const onSubmitPressedPressed = () => {
    if (!question) {
      return;
    }

    console.log(score);
    console.log(selectedChoices);
    setScore((scr) => scr + currSelectedChoice.score);

    const lastItemIndex = selectedChoices.length - 1;
    setGenre(selectedChoices[lastItemIndex].choice);
    setIsAnswered(false)
    // Go to next question
    setQuestionIndex((index) => index + 1);
    
    if (questionIndex == 8) {
      navigation(`/result/${level}`);
    }
  };

  useEffect(() => {
    getLevel();
  }, [score]);

  return (
    <div className="megaContainer">
      <div className="container">
        <>
          <p className="title">Quiz</p>

          <p className="question">{question.question}</p>

          {question.choices.map((choice) => {
            return (
              <Answer
                choice={choice.choice}
                OnPress={() => OnChoicePressed(choice)}
                isSelected={selectedChoices.includes(choice)}
              />
            );
          })}
          
          <div onClick={isAnswered ?  onSubmitPressedPressed : null } className={isAnswered ?  "continue" : "noContinue"}>
            <p>Continuar</p>
          </div>

          <p className="progress">
            {questionIndex + 1} / {quizData.length - 1}
          </p>
        </>
      </div>
    </div>
  );
};

export default QuizScreen;
