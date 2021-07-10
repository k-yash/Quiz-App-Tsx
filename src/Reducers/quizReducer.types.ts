import { QuizData } from "../Contexts/quiz.types";

export type ACTIONTYPE  = 
 | {type:"SET_QUIZZES", payload: Array<QuizData>}
 | {type:"SET_CURRENT_QUIZ", payload: QuizData}
 | {type:"INCREASE_QUESTION_NUMBER"}
 | {type:"INCREMENT", payload: number}
 | {type:"RESET"};
