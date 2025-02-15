
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import './InterviewResult.css';

export default function InterviewResults() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.results) {
    return <div>No results to display. Please complete the interview first.</div>;
  }

  const { averageScore, evaluations } = state.results;

  // Determine color and text based on the average score
  let resultClass = '';
  let resultText = '';

  if (averageScore > 70) {
    resultClass = 'alert alert-success'; // Green
    resultText = 'Excellent, keep it up!';
  } else if (averageScore >= 50) {
    resultClass = 'alert alert-warning'; // Yellow
    resultText = 'Good, but there\'s room for improvement.';
  } else {
    resultClass = 'alert alert-danger'; // Red
    resultText = 'Needs more practice, try again!';
  }

  return (
    <Layout title={'Interview Result'}>
      <div className="container container-int">
        <h1 className="mt-4" style={{ "textAlign": "center" }}>Interview Result</h1>
        <p style={{ "textAlign": "center" }}>Your mock interview is complete. Here's a summary of your performance:</p>

        {/* Display result based on average score */}
        <div className={resultClass + ' mt-3'}>
          <h4>Your Score: <span style={{"fontWeight":"bold"}}>{averageScore}%</span></h4>
          <p>{resultText}</p>
        </div>

        <div className="list-group mt-4">
          {evaluations.map((evaluation, index) => (
            <div key={index} className="list-group-item list-group-item-int">
              <h5><b>Q{index + 1}:</b><span style={{"color":"#1E1B4B"}}> {evaluation.question}</span> </h5>
              <p ><strong  style={{"color":"#880808"}}>Score: </strong><span style={{"color":"#FF4433"}}>{evaluation.evaluation}/10</span></p>
              <p ><strong style={{"color":"#FFBF00"}}>Feedback: </strong>{evaluation.feedback}</p>
              <p><strong style={{"color":"#50C878"}}>Your Answer: </strong>{evaluation.transcription}</p>

              <hr style={{ "color": "black" }} />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary mb-5 btn-submit-interview" onClick={() => navigate('/interview')}>
            &nbsp;&nbsp;Try Again?&nbsp;&nbsp;
          </button>
        </div>
      </div>
    </Layout>

  );
}
