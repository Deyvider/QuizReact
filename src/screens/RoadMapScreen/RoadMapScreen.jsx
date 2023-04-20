import React, { useEffect, useState } from "react";
import { styles } from "./Style";
import { useNavigate, useParams } from "react-router-dom";
import Lesson from "../../components/Lesson/Lesson";
import topics from "../../assets/Data/topics";
import "./style.css";

const RoadMapScreen = () => {
const navigation = useNavigate();
const route = useParams();
const [userTopics, setUserTopic] = useState([]);

useEffect(() => {
    const fetchTopics = () => {
        const curtTopics = topics.filter((tp) => 
            tp.level == route.level
        )
        
        const topicGener = curtTopics.filter((tp) => tp.genre == route.genre || tp.genre == 'none')

        setUserTopic(topicGener)
    }
    fetchTopics();
},[])



    return(
        <div style={styles.container} id="supercont">
            <div className="titleGeneral">
                    <h1 id="h1">Tu ruta de aprendizaje</h1>
            </div>
            <div style={styles.title} className="info">
                <div style={styles.info} className="informacion">
                    <h1 style={styles.subtitle}>Tu nivel es: <strong>{route.level}</strong></h1>
                    <h1 style={styles.subtitle}>Género musical que seleccionaste: <strong>{route.genre}</strong> </h1>
                </div>
            </div>
            <div style={styles.Boxblue} id="cont">
                {userTopics.map((topic) => {
                    return(<Lesson text={topic.title}/>);
                })}
            </div>
        </div>
    );
}
export default RoadMapScreen;