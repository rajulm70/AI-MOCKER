import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EssayScore.css';
import Layout from '../components/Layout/Layout';
import Spinner from '../components/Spinner';

function Score() {
  const [pdfFile, setPdfFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handlePdfChange = (event) => setPdfFile(event.target.files[0]);

  const handleJobDescriptionChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/);

    if (words.length <= 200) {
      setJobDescription(text); // Update only if word count is <= 200
      setWordCount(words.length);
    }
  };

  const handleJobRoleChange = (event) => setJobRole(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    if (wordCount < 120) {
      alert('Word count must be at least 120.');
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append('resume', pdfFile);
    formData.append('jd', jobDescription);
    formData.append('role', jobRole);

    fetch('https://ai-mocker-backend.onrender.com/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitting(false);
        navigate('/response', {
          state: {
            atsScore: data.atsScore,
            suggestions: data.suggestions,
            profileSummary: data.profileSummary,
          },
        });
      })
      .catch((error) => {
        setSubmitting(false);
        console.error('Error:', error);
      });
  };

  return (
    <Layout title={'EssayDashboard'}>
      <div>
        {loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div className="score-container">
            <h1 className="score-title h1Style">Evaluate Your Essay</h1>
            <form onSubmit={handleSubmit} className="score-form">
              <label className="score-label">
                
                <textarea
                  value={jobDescription}
                  onChange={handleJobDescriptionChange}
                  className="score-input-textarea"
                  placeholder="Write your essay here"
                  required
                />
              </label>
              <div className={`word-counter ${wordCount < 120 || wordCount > 200 ? 'warning' : ''}`}>
                {200 - wordCount} words remaining
              </div>
              <button type="submit" className="submit-button" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Essay for Review'}
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Score;
