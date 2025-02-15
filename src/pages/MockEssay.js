import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/auth";

export default function MockEssay() {
    const [auth] = useAuth();
    const navigate = useNavigate();

    const handleStartWriting = () => {
        if (auth?.user) {
            navigate('/score'); // Navigate to the essay writing page
        } else {
            navigate('/login', { state: '/score' }); // Redirect to login with intended page in state
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
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                <img
                    src="https://scot-comp.co.uk/wp-content/uploads/2024/08/58b9da3f-a63b-4055-ad03-f2ca01a1f33a.webp"
                    className="card-img-top"
                    alt="Essay Writing"
                    style={{
                        width: '100%',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">AI Essay Writing</h5>
                    <p className="card-text">
                        Enhance your essay writing skills with our AI-powered platform.
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Real-time feedback on essays</li>
                </ul>
                <div className="card-body" style={{ display: 'flex', justifyContent:'space-around', gap: '0px !important' }}>
                    <button onClick={handleStartWriting} className="btn btn-success">
                        Start Writing
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
