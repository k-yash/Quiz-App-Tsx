import { InitialState } from "../Contexts/Context.types"
import { ACTIONTYPE } from "./quizReducer.types"

export const initialState:InitialState = {
    questionNo : 1,
    quizData : [],
    currentQuiz:{},
    score:0
}

export const reducerFunc=(state:InitialState , action:ACTIONTYPE):InitialState=>{
    switch (action.type) {
        case "SET_QUIZZES":
            return state = {
                ...state, quizData: action.payload
            }
        
        case "SET_CURRENT_QUIZ":
            return state = {
                ...state, currentQuiz: action.payload
            } 
            
        case "INCREASE_QUESTION_NUMBER":
            return state = {
                ...state, questionNo : state.questionNo + 1
            }    

        case "INCREMENT":
            return state;

        case "RESET":
            return state = {
                ...state, questionNo:1, score: 0, 
            }    
   
        default:
            return state;
    }

}