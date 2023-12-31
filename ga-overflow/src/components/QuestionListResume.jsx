import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import questionList from '../data/questions/supermanQuestions';



const QuestionListResume = () => {
    const [questions, setQuestions] = useState(questionList);


    useEffect(() => {
        console.log(questionList);
        console.log("state", questions);
    }, []);


    return (
        <div className='question-container'>
            <h1 className='question-header'>Questions</h1>

            {questions.map((question) => {

                return (
                    <div key={question.id} className="question-list-item">

                        <Link className='question-content' to={`/resume-questions/${question.id}`}>
                            <h4 className='q-title'>{question.title}</h4>
                            <div className='question-body'>
                                <p className='question-description'>{question.description}</p>
                                <div className='code-snippet'>{question.codeSnippet}</div>
                            </div>
                        </Link>
                        <div>

                          
                        </div>

                    </div>

                );
            }
            )}

        </div >
    );

};





export default QuestionListResume;