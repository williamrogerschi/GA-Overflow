import { Link } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

import questionList from '../data/questions/batmanQuestions';



const Main = () => {
    const [questions, setQuestions] = useState(questionList);


    useEffect(() => {
        console.log(questionList);
        setQuestions(questionList);
        console.log("state", questions);
    }, []);


    return (
        <div>

            <h1>Questions</h1>


            {questions.map((question,) => {
                return (
                    <div className="question-list-item">
                        <Link key={question.id} to={`/question/${question.id}`}>
                            <h4>{question.title}</h4>
                            <p>{question.description}</p>
                            <div className='code-snippet'>{question.codeSnippet}</div>
                        </Link>
                    </div>
                );
            }

            )}

        </div>
    );

};





export default Main


