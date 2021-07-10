export type Option = {
    option: string;
    isRight: boolean;
}

export type Question = {
    question:string;
    points : number;
    options : Option[];
}

export type QuizData = {
    id: string;
    quizName: string;
    questions: Question[];
}
