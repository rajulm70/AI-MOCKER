import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/auth";

export default function MockInt() {
    const [auth] = useAuth();
    const navigate = useNavigate();

    const handleStartInterview = () => {
        if (auth?.user) {
            navigate('/interview'); // Navigate to the interview page
        } else {
            navigate('/login', { state: '/interview' }); // Redirect to login with intended page in state
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
                    borderRadius: '15px',
                    cursor: 'pointer',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    boxShadow: '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    transition: 'transform 0.4s, box-shadow 0.2s',
                    overflow: 'hidden',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                <img
                    src="https://media.licdn.com/dms/image/D4D12AQF7Mqxy4FIVEA/article-cover_image-shrink_720_1280/0/1711745116465?e=2147483647&v=beta&t=3XktYOxULnZtf_GNFM7hLGpmmbLfHAsdyrz6ejMFP0Y"
                    className="card-img-top"
                    alt="Mock Interview"
                    style={{
                        width: '100%',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">Mock Interview</h5>
                    <p className="card-text">
                        Prepare for your upcoming job interview with our AI-powered mock interview platform.
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Personalized interview experience</li>
                </ul>
                <div className="card-body" style={{ display: 'flex', justifyContent: 'space-around', gap: '0px' }}>
                    <button onClick={handleStartInterview} className="btn btn-success">
                        Start Now
                    </button>
                    <button onClick={() => navigate('/learn')} className="btn btn-primary">
                        Learn More
                    </button>
                </div>
            </div>
            <style>
                {`
                @media (max-width: 720px) {
                    .card {
                        max-width: 23rem;
                        box-shadow: 5px 15px 8px rgba(0, 0, 0, 0.2);
                    }
                    .btn {
                        font-size: 0.9rem;
                        padding: 0.5rem 1rem;
                    }
                }
                @media (max-width: 480px) {
                    .card {
                        max-width: 21rem;
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
