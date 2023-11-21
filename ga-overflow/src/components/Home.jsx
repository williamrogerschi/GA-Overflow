import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <>
            <div className='home-container'>
                <div className="topic-btn">
                    <Link className='js-questions' to="js-questions">JavaScript Questions</Link>
                </div>
                <div className="topic-btn">
                    <Link className='html-questions' to="/html-questions">HTML Questions</Link>
                </div>
                <div className="topic-btn">
                    <Link className="topic-btn" to="resume-questions">Resume Advice</Link>
                </div>
            </div>
        </>
    );
};

export default Home;