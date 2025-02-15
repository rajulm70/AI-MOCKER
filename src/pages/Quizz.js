import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quizz.css';
import Layout from '../components/Layout/Layout';
import Spinner from '../components/Spinner';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Loading from "./Loading";

const Quizz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [numQuestions, setNumQuestions] = useState(10);
    const [language, setLanguage] = useState('english');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timer);
    }, []);

    const handleLanguageChange = (event) => setLanguage(event.target.value);

    const handleFileChange = (event) => setFile(event.target.files[0]);

    const handleNumQuestionsChange = (event) => setNumQuestions(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            alert("Please upload a file.");
            return;
        }

        setLoading(true);
        setQuestions([]);
        setSelectedAnswers([]);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('numQuestions', numQuestions);
        formData.append('language', language);

        try {
            const response = await fetch('https://ai-mocker-backend-quiz.onrender.com/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Failed to upload the file');

            const result = await response.json();
            if (result.error) throw new Error(result.error);

            setQuestions(result.questions || []);
            localStorage.setItem('questions', JSON.stringify(result.questions || []));
            navigate('/Quizpage');
        } catch (error) {
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

      if (isLoading) return <Spinner />;

    return (
        <Layout title={'QuizDashboard'}>
            <div className="app-container">
                <h1 className="quiz-title">
                    <span className="Quiz">AI-</span> <span className="Game">Quizzy</span>
                </h1>
                <p style={{'color':'black', 'textAlign':'center'}}>Generate the quiz with the uploaded file and the number of questions you want.</p>
                <br />
                <form onSubmit={handleSubmit} className="quiz-form">
                    <label htmlFor="file" className="input-label">
                        Upload File (PDF or Image):
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="application/pdf,image/*"
                        onChange={handleFileChange}
                        className="input-field"
                    />
                    <br />

                    <label htmlFor="numQuestions" className="input-label">
                        Number of Questions:
                    </label>
                    <input
                        type="number"
                        id="numQuestions"
                        name="numQuestions"
                        min="1"
                        value={numQuestions}
                        onChange={handleNumQuestionsChange}
                        className="input-field"
                        required
                    />
                    <br />

                    <label htmlFor="language" className="input-label">
                        Preferred Language:
                    </label>
                    <input
                        type="text"
                        id="language"
                        name="language"
                        value={language}
                        onChange={handleLanguageChange}
                        className="input-field"
                        placeholder="e.g., Hindi, Spanish"
                        required
                    />
                    <br />

                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </Layout>

    );
};

export default Quizz;

