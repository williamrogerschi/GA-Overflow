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

                    <Link className='question-content' key={question.id} to={`/question/${question.id}`}>
                        <h4 className='q-title'>{question.title}</h4>
                        <div className='question-body'>
                        <p className='question-description'>{question.description}</p>
                        <div className='code-snippet'>{question.codeSnippet}</div>
                        </div>
                    </Link>

                    <div key={key} onClick={() => showQuestion(question.id)}>
                        <h4>{question.title}</h4>
                        <p>{question.description}</p>
                        <div className='code-snippet'>{question.codeSnippet}</div>
                    </div>

                </div>
                );
            }
            )}

        </div >
    );

};





export default QuestionList


