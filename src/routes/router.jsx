import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizScreen from "../screens/QuizScreen/";
import ResultScreen from "../screens/ResultsScreen/";
import LadingPage from "../screens/LadingPage/LadingPage";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RoadMapScreen from "../screens/RoadMapScreen/RoadMapScreen";


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path ='/' element = {<LadingPage/>}/>
                    <Route path="quiz" element={<QuizScreen/>}/>
                    <Route path= "result/:score" element={<ResultScreen/>} />
                    <Route path="login" element = {<LoginScreen/>}/>
                    <Route path="roadMap/:level/:genre" element = {<RoadMapScreen/>}/>
                </Routes>
            </BrowserRouter>
       </div>
    )
}

export default Router;