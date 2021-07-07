import React from 'react'
import { Question } from '../data/quiz.types';

const QuestionBox = ({ques}:{ques:Question}) => {
    return (
        <div>
            <h1>{ques.question}</h1>
        </div>
    )
}

export default QuestionBox;
