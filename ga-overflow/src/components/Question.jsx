import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import questionList from '../data/questions/supermanQuestions';


let displayQuestionDetail;

export default function Question(props) {
    const [question, setQuestion] = useState({});
    const { id } = useParams();



    useEffect(() => {

        console.log(questionList);
        console.log(id);
        displayQuestionDetail = questionList.find((item) => {
            return item.id === Number(id);

        });
        setQuestion(displayQuestionDetail);
        console.log(question);
    }, []);
    return (

        <div className='question-container'>
            <h1 className='question-header'>Questions</h1>
            {question && <div key={question.id} className="question-list-item">

                <div className='question-content' to={`/resume-questions/${question.id}`}>
                    <h4 className='q-title'>{question.title}</h4>
                    <div className='question-body'>
                        <p className='question-description'>{question.description}</p>
                        <div className='code-snippet'>{question.codeSnippet}</div>
                    </div>
                    <h2></h2>

                    <form action="#" method="post" id="feedbackForm">
                        <label for="email">Your Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label for="comments">Comments:</label>
                        <textarea id="comments" name="comments" rows="4" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                    <div className="reply-container">
                        <p><h3>Superman's Resume Advice Reply</h3><br />
                            Dear Superman,<br />
                            Thank you for your valuable resume advice. I appreciate your guidance on showcasing my work experience and super skills. I will make sure to highlight my achievements and provide a clear flight plan for professional success.<br />
                            Additionally, I will create a super Curriculum Vitae (CV) that encapsulates my career journey, as you suggested. Your insights are truly super and will undoubtedly contribute to my success in the professional Justice League.<br />
                            Sincerely,<br />Your Future Super Employee</p>
                    </div>

                    <div class="reply-container">
                        <h3>Superman's Resume Advice Reply</h3>
                        <p>
                            Hey Superman,<br />
                            Thanks a bunch for the resume tips! Your advice on showing off my work experience and super skills is gold. I'll definitely hype up my achievements and lay out a clear flight plan for success.<br />
                            And yeah, I'm gonna whip up a super CV just like you suggested. Your insights are awesome and I'm pumped to bring that superhero vibe to the professional Justice League.<br />
                            Catch you later!<br />
                            Cheers,<br />
                            Your Future Super Employee
                        </p>
                    </div>

                </div>



            </div>}







        </div >
    );
}