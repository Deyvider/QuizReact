import React from "react";
import { styles } from "./style";

const Lesson = ({text}) => {
    return(
        <div style={styles.box}>
            <p style={styles.text}>{text}</p>
        </div>
    );
}

export default Lesson;