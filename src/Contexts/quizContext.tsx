import React, {createContext, useContext, useReducer} from "react";
import {reducerFunc, initialState} from "../Reducers/quizReduces";
import {QuizContextType} from "./Context.types";





export const QuizContext = createContext<QuizContextType>({} as QuizContextType);


export const QuizProvider: React.FC = ({children}) => {

    const [state, dispatch] = useReducer(reducerFunc, initialState);

    return (
        <QuizContext.Provider value={{state, dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

export const useQuiz = () => {
    return useContext(QuizContext);
}