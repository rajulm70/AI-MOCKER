import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizPage.css';
import Layout from '../components/Layout/Layout';

const Quizpage = () => {
    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Fetch questions from localStorage and handle navigation if no questions exist
    useEffect(() => {
        const storedQuestions = JSON.parse(localStorage.getItem('questions'));
        if (storedQuestions) {
            setQuestions(storedQuestions);
        } else {
            navigate('/');
        }
    }, [navigate]);

    // Handle option selection for a specific question
    const handleOptionChange = (questionIndex, option) => {
        setResponses((prevResponses) => ({
            ...prevResponses,
            [questionIndex]: option,
        }));
    };

    // Navigate to the next question
    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    // Navigate to the previous question
    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    // Handle quiz submission
    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/Resultpage', { state: { questions, responses } });
        }, 1000);
    };

    // Render clickable question numbers in the sidebar
    const renderQuestionNumbers = () => (
        <div className="question-numbers-qu">
            {questions.map((_, index) => (
                <button
                    key={index}
                    className={`question-number-qu ${responses[index] ? 'answered-qu' : ''}`}
                    onClick={() => setCurrentQuestion(index)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );

    // Calculate the count of attempted questions
    const getAttemptedCount = () => Object.keys(responses).length;

    // Return the main JSX structure
    return (
        <Layout title={'QuizDashboard'}>
            <div className="quiz-page-qu">
            <h1>Quiz Page</h1>
            <div className="quiz-container-qu">
                {/* Question Section */}
                <div className="question-section-qu">
                    {questions.length > 0 && (
                        <div className="question-container-qu">
                            <p>
                                Question {currentQuestion + 1}: {questions[currentQuestion].ques}
                            </p>
                            <div className="options-qu">
                                {['o1', 'o2', 'o3', 'o4'].map((opt) => (
                                    <label key={opt}>
                                        <input
                                            className="option-div-qu"
                                            type="radio"
                                            name={`question-${currentQuestion}`}
                                            value={opt}
                                            checked={responses[currentQuestion] === opt}
                                            onChange={() => handleOptionChange(currentQuestion, opt)}
                                        />
                                        <span className="option-text-qu">
                                            {questions[currentQuestion][opt]}
                                        </span>
                                    </label>
                                ))}
                            </div>
                            <div className="navigation-buttons-qu">
                                <button
                                    type="button"
                                    onClick={handlePrevious}
                                    disabled={currentQuestion === 0}
                                >
                                    Previous
                                </button>
                                {currentQuestion < questions.length - 1 ? (
                                    <button type="button" onClick={handleNext}>
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={loading}
                                    >
                                        {loading ? 'Submitting...' : 'Submit'}
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar Section */}
                <div className="sidebar-qu">
                    <h2>Questions</h2>
                    {renderQuestionNumbers()}
                    <div className="instruction-qu">
                        <div className="status-item-qu">
                            <span className="status-indicator-qu not-answered-qu"></span> Not Answered
                        </div>
                        <div className="status-item-qu">
                            <span className="status-indicator-qu answered-qu"></span> Answered
                        </div>
                    </div>
                    <div className="attempted-info-qu">
                        <p>
                            <span className="info-label-qu">Attempted:</span> {getAttemptedCount()} /{' '}
                            {questions.length}
                        </p>
                        <p>
                            <span className="info-label-qu">Not Attempted:</span>{' '}
                            {questions.length - getAttemptedCount()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
        
    );
};

export default Quizpage;
