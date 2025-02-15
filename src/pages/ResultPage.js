import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ResultPage.css';
import Layout from '../components/Layout/Layout';
// import '@fortawesome/fontawesome-free/css/all.min.css';

function Resultpage() {
  const location = useLocation();
  const { questions, responses } = location.state || { questions: [], responses: {} };

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [displayScore, setDisplayScore] = useState(0);
  const [stats, setStats] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (questions.length > 0 && Object.keys(responses).length > 0) {
      const processedAnswers = questions.map((question, index) => ({
        question: question.ques,
        correct: question.correct,
        selected: responses[index] || null,
        options: ['o1', 'o2', 'o3', 'o4'].map((key) => ({
          option: question[key],
          key,
        })),
      }));

      const correctCount = processedAnswers.filter(
        (answer) => answer.selected === answer.correct
      ).length;

      const calculatedScore = Math.round((correctCount / questions.length) * 100);

      setSelectedAnswers(processedAnswers);
      setScore(calculatedScore);
      setStats({
        attempted: Object.keys(responses).length,
        correct: correctCount,
        incorrect: Object.keys(responses).length - correctCount,
      });

      if (calculatedScore >= 95) {
        setFeedback('Superb! You nailed it!');
      } else if (calculatedScore >= 70) {
        setFeedback('Good job! Just a bit of improvement needed.');
      } else if (calculatedScore >= 60) {
        setFeedback('Keep going! You can improve further.');
      } else {
        setFeedback('Needs more practice. Keep trying!');
      }

      let currentScore = 0;
      const scoreInterval = setInterval(() => {
        if (currentScore < calculatedScore) {
          currentScore++;
          setDisplayScore(currentScore);
        } else {
          clearInterval(scoreInterval);
        }
      }, 20);
    }
  }, [questions, responses]);

  const handleFilterChange = (type) => {
    setLoading(true);
    setFilterType(type);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const filteredAnswers = selectedAnswers.filter((answer) => {
    if (filterType === 'correct') return answer.selected === answer.correct;
    if (filterType === 'incorrect') return answer.selected && answer.selected !== answer.correct;
    if (filterType === 'unattempted') return answer.selected === null;
    return true;
  });

  return (
    <Layout title={'QuizResult'}>
      <div className="result-page">
        <h1 className="main-Heading">
          <span className="Quiz">Quiz</span> <span className="Analysis">Analysis</span>
        </h1>

        {score !== null && (
          <div className="score-card">
            <div className="circular-bar-result">
              <svg viewBox="0 0 36 36" className="circular-chart-result">
                <path
                  className="circle-bg-result"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle-result"
                  strokeDasharray={`${displayScore}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage-result">
                  {displayScore}%
                </text>
              </svg>
            </div>
            <div className="feedback">{feedback}</div>
            <div className="score-stats">
              <div className="stat-item">
                <span className="stat-label">Attempted:</span> {stats.attempted}
              </div>
              <div className="stat-item">
                <span className="stat-label">Correct:</span> {stats.correct}
              </div>
              <div className="stat-item">
                <span className="stat-label">Incorrect:</span> {stats.incorrect}
              </div>
            </div>

            <div className="filter-buttons">
              <button onClick={() => handleFilterChange('all')}>All</button>
              <button onClick={() => handleFilterChange('correct')}>Correct</button>
              <button onClick={() => handleFilterChange('incorrect')}>Incorrect</button>
              <button onClick={() => handleFilterChange('unattempted')}>Unattempted</button>
            </div>

            {loading ? (
              <div className="loading-spinner">
                <i className="fas fa-spinner fa-spin"></i>
              </div>
            ) : (
              <div className="answers-details">
                {filteredAnswers.map((answer, index) => (
                  <div
                    key={index}
                    className={`answer-detail ${answer.selected === answer.correct ? 'correct' : 'incorrect'}`}
                  >
                    <div className="question-text">
                      {answer.selected === answer.correct ? (
                        <i className="fas fa-check-circle icon correct-icon"></i>
                      ) : (
                        <i className="fas fa-times-circle icon incorrect-icon"></i>
                      )}
                      {answer.question}
                    </div>
                    <div className="options-list">
                      {answer.options.map(({ option, key }) => (
                        <div
                          key={key}
                          className={`option ${key === answer.correct ? 'correct' : ''} ${key === answer.selected ? 'selected' : ''}`}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                    <div className="selected-answer">
                      <span className="answer-label">Your answer:</span>{' '}
                      {answer.selected
                        ? answer.options.find((opt) => opt.key === answer.selected)?.option
                        : 'Not answered'}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>

  );
}

export default Resultpage;
