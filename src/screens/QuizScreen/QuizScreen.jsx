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
  const [score, setScore] = useState(0);
  const [genre, setGenre] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const navigation = useNavigate();

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
  };

  const getLevel = () => {
    if (!score) {
      return;
    }
    switch (score) {
      case 0:
        setLevel('Principiante')
        break;

      case 0.1:
        setLevel('Principiante')
        break;

      case 0.2:
        setLevel('Principiante')
        break;

      case 0.3:
        setLevel('Intermedio')
        break;

      case 0.4:
        setLevel('Intermedio')
        break;

      case 0.5:
        setLevel('Intermedio')
        break;
      case 0.6:
        setLevel('Intermedio')
        break;

      case 0.7:
        setLevel('Intermedio')
        break;

      case 0.8:
        setLevel('Avanzado')
        break;
      case 0.9:
        setLevel('Avanzado')
        break;
      case 1:
        setLevel('Avanzado')

      default:
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
          <div onClick={onSubmitPressedPressed} className="continue">
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
