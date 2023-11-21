import { Link, Navigate, useNavigate } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

import dataList from '../data/questions/batmanQuestions';



const QuestionList = () => {
    const [questionList, setQuestionList] = useState(dataList);


    useEffect(() => {
        console.log(questionList);
        setQuestionList(dataList);
        console.log("state", questions);
    }, []);

    const showQuestion = (questionId) => {
        Navigate(`/questions/${questionId}`)
    }


    return (
        <div>

            <h1>Questions</h1>


            {questions.map((question, key) => {
                return (
                    <div className="question-list-item">
                        <div key={key} onClick={() => showQuestion(question.id)}>
                            <h4>{question.title}</h4>
                            <p>{question.description}</p>
                            <div className='code-snippet'>{question.codeSnippet}</div>
                        </div>
                    </div>
                );
            }

            )}

        </div>
    );

};





export default QuestionList


