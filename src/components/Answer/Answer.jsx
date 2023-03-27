import React from "react";
import quizData from "../../assets/Data/quizData"
import "./Style.css"

const Answer = ({choice, OnPress, isSelected}) => {
    
    return(
      <div className={`respuesta${isSelected ? '_active' : ''}`} onClick={OnPress}>
        <p>{choice}</p> 
      </div>  
    )
}

export default Answer
