import React, { useEffect } from 'react';
import './FocusComponent.css';

const FocusComponent = ({ scrollToDashboard }) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.highlight').classList.add('animate-left');
    }, 3000); // After the typing effect completes
  }, []);

  return (
    <div className="focus-section">
      <div className="focus-content">
        <h1 className="focus-title">
          <span className="typing-effect">Welcome to the <span className="highlight">AI-Mocker !</span></span>
        </h1>
        <p className="focus-subtitle">Revolutionizing the Way We Prepare for Careers!</p>
        <button className="cta-button" onClick={scrollToDashboard}>Get Started</button>
      </div>

      {/* Floating animation effects */}
      <div className="animation-container">
        <div className="floating-icon icon-1"></div>
        <div className="floating-icon icon-2"></div>
        <div className="floating-icon icon-3"></div>
      </div>
    </div>
  );
};

export default FocusComponent;
