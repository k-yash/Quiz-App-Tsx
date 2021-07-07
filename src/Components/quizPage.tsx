import React from 'react'
import {quizData} from '../data/quiz';
import QuestionBox from '../Components/question';

const QuizPage = () => {
    return (
        <div>
            {quizData.questions.map((ques)=>{
                return <QuestionBox ques = {ques} />
            })}
            
            
        </div>
    )
}

export default QuizPage
