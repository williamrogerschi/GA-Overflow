import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import QuestionList from './QuestionList';
import HTMLQuestions from './QuestionListHTML';
import ResumeQuestions from './QuestionListResume';
import { useState, useEffect } from 'react';
import axios from 'axios';




const Main = () => {

    // const [userData, setUserData] = useState(null)
    // const [updateUser, setUpdateUser] = useState(null)


    return (
        <>
            <div className="main">
                <div className='header-container'>
                    <Nav />
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/js-questions' element={<QuestionList />} />
                    <Route path='/html-questions' element={<HTMLQuestions />} />
                    <Route path='/resume-questions' element={<ResumeQuestions />} />
                </Routes>
            </div>
        </>
    );
};





export default Main


