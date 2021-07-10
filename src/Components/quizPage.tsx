import React from 'react'
import {firstQuiz} from '../data/quiz';
import QuestionBox from '../Components/question';
let score = 0;
const QuizPage = () => {
    return (
        <div>
            
            {firstQuiz.questions[score].question}         
            
        </div>
    )
}

export default QuizPage;
