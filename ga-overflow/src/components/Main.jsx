import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import QuestionListJS from './QuestionListJS';
import QuestionListHTML from './QuestionListHTML';
import QuestionListResume from './QuestionListResume';
import Question from './Question';
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
                    <Route path='/js-questions' element={<QuestionListJS />} />
                    <Route path='/js-questions/:id' element={<Question />} />
                    <Route path='/html-questions' element={<QuestionListHTML />} />
                    <Route path='/html-questions/:id' element={<Question />} />
                    <Route path='/resume-questions' element={<QuestionListResume />} />
                    <Route path='/resume-questions/:id' element={<Question />} />
                </Routes>
            </div>
        </>
    );
};





export default Main


