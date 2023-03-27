import React, { useEffect, useState } from "react";
import quizData from "../../assets/Data/quizData";
import Answer from "../../components/Answer/";
import "./Style.css";
import Result from "../../components/Result";

const QuizScreen = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = quizData[questionIndex];
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [currSelectedChoice, setCurrSelectedChoice] = useState({});
  const [level, setLeve] = useState("");
  const [score, setScore] = useState(0);
  const [genre, setGenre] = useState("");
  const [isDone, setIsDone] = useState(false)

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

  const onSubmitPressedPressed = () => {
    if (!question) {
      return;
    }
    console.log(score);
    console.log(selectedChoices);
    setScore((scr) => scr + currSelectedChoice.score);

    const lastItemIndex = selectedChoices.length - 1
    setGenre(selectedChoices[lastItemIndex].choice);
    
    
    // Go to next question
    setQuestionIndex((index) => index + 1);

    if (questionIndex > 10) {
      setIsDone(true);
    }
    
  };

  useEffect(() => {
    if(isDone){
      console.warn('lola')
    }
  }, [isDone])
  

  return (
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
          <view onClick={onSubmitPressedPressed}>
            <p className="Continue">Continuar</p>
          </view>
          
          <p className="progress">{questionIndex + 1} / {quizData.length}</p>
         
        </>
      
    </div>
  );
};

export default QuizScreen;
