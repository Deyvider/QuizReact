import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Result from "../../components/Result/Result";

const ResultScreen = () => {
    const route = useParams();
    return (
        <div id="principal">
            <Result level={route.score}/>
        </div>
        
    )
}

export default ResultScreen;