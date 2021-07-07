import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizPage from './Components/quizPage';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from './Pages/Signup';
import ErrorPage from "./Pages/ErrorPage";
import Quizzes from './Pages/Quizzes';
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element= {<Home/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/signup" element= {<Signup/>} />
        <Route path="/quizzes" element= {<Quizzes/>} />
        {/* <Route path="/quizzes/:quizId" element= {<QuizPage/>}/> */}
        <Route path="*" element= {<ErrorPage/>} />
      </Routes>
      {/* <QuizPage/> */}
    </div>
  );
}

export default App;
