import React, { useEffect, useState } from "react";
import { styles } from "./Style";
import { useNavigate, useParams } from "react-router-dom";
import Lesson from "../../components/Lesson/Lesson";
import topics from "../../assets/Data/topics";

const RoadMapScreen = () => {
const navigation = useNavigate();
const route = useParams();
const [userTopics, setUserTopic] = useState([]);

useEffect(() => {
    const fetchTopics = () => {
        const curtTopics = topics.filter((tp) => 
            tp.level == route.level
        )
        curtTopics.filter((tp) => tp.genre == route.genre || tp.genre == 'none')
        
        setUserTopic(curtTopics)
    }
    fetchTopics();
},[])



    return(
        <div style={styles.container}>
            <div style={styles.title}>
                <h1 id="h1">Tu ruta de aprendizaje</h1>
                <div style={styles.info}>
                    <h1 style={styles.subtitle}>Tu nivel es: {route.level}</h1>
                    <h1 style={styles.subtitle}>Género musical que seleccionaste: {route.genre} </h1>
                </div>
            </div>
            <div style={styles.Boxblue}>
                {userTopics.map((topic) => {
                    return(<Lesson text={topic.title}/>);
                })}
            </div>
        </div>
    );
}
export default RoadMapScreen;