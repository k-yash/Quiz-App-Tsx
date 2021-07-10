import { QuizData } from "./quiz.types";
import {ACTIONTYPE} from "../Reducers/quizReducer.types";

export type QuizContextType={
    state : InitialState;
    dispatch : (action:ACTIONTYPE)=>void;
}

export type QuizState = {
    questionNo : number,
    quizData : [],
    score: number
}

export type InitialState = {
    questionNo : number;
    quizData : QuizData[]|[],
    currentQuiz:QuizData|{},
    score: number;
}