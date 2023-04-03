import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizScreen from "../screens/QuizScreen/";
import ResultScreen from "../screens/ResultsScreen/";



const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<QuizScreen/>}/>
                    <Route path='result' element={<ResultScreen/>} />
                </Routes>
            </BrowserRouter>
       </div>
    )
}

export default Router;