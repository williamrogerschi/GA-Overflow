
import { Link } from 'react-router-dom';
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
        Navigate(`/questions/${questionId}`);
    };


    return (
        <div className='question-container'>

            <h1 className='question-header'>Questions</h1>


            {questions.map((question, key) => {
                return (
                    <div className="question-list-item">
                        <Link key={question.id} to={`/javaScripQuestion/${question.id}`}>
                            <h4>{question.title}</h4>
                            <p>{question.description}</p>
                            <div className='code-snippet'>{question.codeSnippet}</div>
                        </Link>
                    </div>
                );
            }
            )}

        </div >
    );

};





export default QuestionList


