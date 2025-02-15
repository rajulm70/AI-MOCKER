
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import './MockIntDashboard.css';

export default function MockIntDashboard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobRole: '',
    yearsOfExperience: '',
    jobDescription: '',
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      alert('Please upload your resume.');
      return;
    }

    setIsSubmitting(true); // Set the submitting state to true

    const uploadData = new FormData();
    uploadData.append('resume', formData.resume);
    uploadData.append('jobRole', formData.jobRole);
    uploadData.append('yearsOfExperience', formData.yearsOfExperience);
    uploadData.append('jobDescription', formData.jobDescription);

    try {
      const response = await fetch('https://backend-interview-1.onrender.com/upload', {
        method: 'POST',
        body: uploadData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      const result = await response.json();
      if (result.error) {
        throw new Error(result.error);
      }

      localStorage.setItem('interviewQuestions', JSON.stringify(result.interviewQuestions));
      navigate('/interview-questions');
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false); // Reset the submitting state
    }
  };

  return (
    <Layout title={'Mock Interview Dashboard'}>
      <div className="mock-dashboard-container">
        <h1 className="mock-dashboard-title">
          Prepare for Your <span className="highlight-int">Interview</span>
        </h1>
        <p className="mock-dashboard-subtitle">
          Provide details about your desired job role and upload your resume to get started.
        </p>

        <form onSubmit={handleSubmit} className="mock-dashboard-form">
          <label htmlFor="jobRole" className="mock-input-label">
            Job Role/Job Position:
          </label>
          <input
            type="text"
            id="jobRole"
            value={formData.jobRole}
            onChange={handleInputChange}
            className="mock-input-field"
            placeholder="Ex. Full Stack Developer"
            required
          />
          <br />

          <label htmlFor="yearsOfExperience" className="mock-input-label">
            Years of Experience:
          </label>
          <input
            type="number"
            id="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleInputChange}
            className="mock-input-field"
            placeholder="Ex. 5"
            required
          />
          <br />

          <label htmlFor="jobDescription" className="mock-input-label">
            Job Description/Tech Stack:
          </label>
          <textarea
            id="jobDescription"
            value={formData.jobDescription}
            onChange={handleInputChange}
            className="mock-input-field mock-textarea"
            placeholder="Describe the key responsibilities or tech stack related to the job."
            required
          />
          <br />

          <label htmlFor="resume" className="mock-input-label">
            Upload Your Resume:
          </label>
          <input
            type="file"
            id="resume"
            accept="application/pdf"
            onChange={handleFileChange}
            className="mock-input-field"
            required
          />
          <br />

          <button
            type="submit"
            className={`mock-submit-button ${isSubmitting ? 'mock-submit-button-wait' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Please Wait...' : 'Submit'}
          </button>
        </form>
      </div>
    </Layout>
  );
}
