import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/auth"; // Import the authentication context

export default function MockQuizzy() {
  const [auth] = useAuth(); // Get the authentication state
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (auth?.user) {
      navigate('/quiz'); // Navigate to the quiz page if authenticated
    } else {
      navigate('/login', { state: '/quiz' }); // Redirect to login with a state pointing to the quiz page
    }
  };

  return (
    <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        className="card text-center"
        style={{
          width: '100%',
          maxWidth: '24rem',
          display: 'flex',
          cursor: 'pointer',
          borderRadius: '15px',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          transition: 'transform 0.4s, box-shadow 0.2s',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.03)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <img
          src="https://i.ytimg.com/vi/Qm-HXhz2zbI/maxresdefault.jpg"
          className="card-img-top"
          alt="AI Quiz"
          style={{
            width: '100%',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
          }}
        />
        <div className="card-body">
          <h5 className="card-title">AI-Powered Quiz</h5>
          <p className="card-text">
            Test your knowledge with quizzes. Instant feedback and detailed explanations.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Customized quizzes.</li>
        </ul>
        <div className="card-body" style={{ display: 'flex', justifyContent: 'space-around', gap: '0px' }}>
          <button onClick={handleStartQuiz} className="btn btn-success">
            Start Quiz
          </button>
          <Link to="/learn" className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
      <style>
        {`
        @media (max-width: 720px) {
          .card {
            max-width: 20rem;
            box-shadow: 5px 15px 8px rgba(0, 0, 0, 0.2);
          }
          .btn {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
          }
        }
        @media (max-width: 480px) {
          .card {
            max-width: 18rem;
            box-shadow: 4px 12px 6px rgba(0, 0, 0, 0.15);
          }
          .btn {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }
        `}
      </style>
    </div>
  );
}
