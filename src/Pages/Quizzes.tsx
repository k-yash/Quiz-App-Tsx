import React from 'react'
import QuizDescriptionCard from "../Components/quizDescriptionCard";

import {useQuiz} from "../Contexts/quizContext";

const Quizzes = () => {

    const {state: { quizData}} = useQuiz();

    return (
        <div>
        {quizData.map((quiz)=>{
            // return <QuizDescriptionCard quiz = {quiz} />
        })}
        </div>
    )
}

export default Quizzes
