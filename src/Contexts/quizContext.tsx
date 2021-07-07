import React, {createContext, useContext} from "react";

const initialState = {
    questionNo : 1,
    quizData : [],
    score:0
}

export const QuizContext = createContext({});


export const QuizProvider: React.FC = ({children}) => {

    return (
        <QuizContext.Provider value={{}}>
            {children}
        </QuizContext.Provider>
    )
}

export const useQuiz = () => {
    return useContext(QuizContext);
}