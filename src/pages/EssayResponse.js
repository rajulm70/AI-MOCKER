import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EssayScore.css';
import Layout from '../components/Layout/Layout';
import Spinner from '../components/Spinner';

function Response() {
    const location = useLocation();
    const navigate = useNavigate();
    const { atsScore, suggestions, profileSummary } = location.state || {
        atsScore: 'No ATS score available',
        suggestions: 'No suggestions available',
        profileSummary: 'No profile summary available'
    };
    const [isLoading, setIsLoading] = useState(true);
    const [animatedScore, setAnimatedScore] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Animate the score increment
        let start = 0;
        const scoreInterval = setInterval(() => {
            start += 1;
            if (start > parseFloat(atsScore)) {
                clearInterval(scoreInterval);
            } else {
                setAnimatedScore(start);
            }
        }, 10); // Adjust the interval for smoother or faster animation

        return () => clearInterval(scoreInterval);
    }, [atsScore]);

    const getAtsScoreClass = () => {
        if (atsScore === 'No ATS score available') return 'score-no-data';
        const score = parseFloat(atsScore);
        if (score >= 70) return 'score-green';
        if (score >= 61) return 'score-yellow';
        if (score >= 45) return 'score-orange';
        return 'score-red';
    };

    const getStrokeColor = () => {
        const score = parseFloat(atsScore);
        if (score >= 70) return '#4caf50'; // Green
        if (score >= 61) return '#ffc107'; // Yellow
        if (score >= 45) return '#ff9800'; // Orange
        return '#f44336'; // Red
    };

    if (isLoading) {
        return (
            <div className="container">
                <Spinner />
            </div>
        );
    }

    return (
        <Layout title={'EssayResult'}>
            <div className="response-container">
                <h1 className="response-title h1Style">Essay Score and Recommendations</h1>

                <div className="circular-bar-essay">
                    <svg viewBox="0 0 36 36" className="circular-chart-essay">
                        <path
                            className="circle-bg-essay"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="circle-essay"
                            style={{
                                stroke: getStrokeColor(),
                                strokeDasharray: `${animatedScore}, 100`
                            }}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" className="percentage-essay" style={{ fill: getStrokeColor() }}>
                            {animatedScore}%
                        </text>
                    </svg>
                </div>

                <div className="sectionx">
                    <h2 className="section-titlex">Score</h2>
                    <p className={`section-contentx ${getAtsScoreClass()}`}>{atsScore}</p>
                </div>

                <div className="section">
                    <h2 className="section-title">Suggestions for Improvement</h2>
                    <p className="section-content">{suggestions}</p>
                </div>

                <div className="section">
                    <h2 className="section-title">Summary</h2>
                    <p className="section-content">{profileSummary}</p>
                </div>

                <button type="button" onClick={() => navigate('/score')} className="response-button">
                    Rewrite The Essay
                </button>
            </div>
        </Layout>
    );
}

export default Response;
