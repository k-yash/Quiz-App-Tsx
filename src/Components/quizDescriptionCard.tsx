import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import { QuizData } from '../Contexts/quiz.types';

const QuizDescriptionCard = ({quiz}:QuizData) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.nextgov.com/media/img/cd/2020/10/19/NGspace20201019/860x394.jpg?1618395239" />
            <Card.Body>
                <Card.Title>{quiz.quizName}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link to="/quizzes/1234" >Go somewhere</Link>
            </Card.Body>
        </Card>
    )
}

export default QuizDescriptionCard;
