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
            <div className='group-wrapper'>
            <div className='group-container'>
                <h3 className='groups-ul'>Your Groups</h3>
                    <a className='about-a'>Ionic Components</a>
                    <a className='about-a'>JavaBros</a>
                    <a className='about-a'>Developer 101</a>
                    <a className='about-a'>CSS Tricks</a>
                    <a className='about-a'>HTML Talk</a>
            </div>
            <div className='user-home'>
                <div className='group-1'>
                    <h4>SEI Development</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem molestiae placeat, molestias facere aliquam facilis unde eveniet earum consequatur ducimus! Et quae eum beatae consequuntur deleniti facere debitis iure.</p>
                </div>
                <div className='group-1'>
                <h4>Future Developers</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure doloremque accusantium perspiciatis facere, repellat pariatur maxime dolore suscipit numquam dolorum enim iusto cum impedit commodi tenetur odit distinctio error. Autem.</p>
                </div>
                <div className='group-1'>
                    <h4>Creating Hyperlinks</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis iure nisi illum repellendus ipsa esse sit cum ab. Natus dicta repellat reprehenderit repellendus, est illum. Consequatur dignissimos tempore suscipit.</p>
                </div>
                </div>
            </div>

        </>
    );
};

export default Home;