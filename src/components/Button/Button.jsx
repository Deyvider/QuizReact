import React from "react";
import "./style.css"

const Button = ({text}) => {
    return(
        <div className="buton">
            <p>{text}</p>
        </div>
    );
}

export default Button;