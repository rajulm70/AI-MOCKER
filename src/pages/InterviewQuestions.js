import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useSpeechToText from 'react-hook-speech-to-text';
import './InterviewQuestions.css';
import Layout from '../components/Layout/Layout';

export default function InterviewQuestions() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [videoStream, setVideoStream] = useState(null); // For webcam stream
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submit button
  const videoRef = useRef(null); // Ref for video element
  const navigate = useNavigate();

  const {
    error,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
    speechRecognitionProperties: {
      interimResults: true,
      lang: 'en-US',
    },
  });

  useEffect(() => {
    const fetchedQuestions = JSON.parse(localStorage.getItem('interviewQuestions'));
    if (!fetchedQuestions || fetchedQuestions.length === 0) {
      navigate('/');
    } else {
      setQuestions(fetchedQuestions);
      setAnswers(new Array(fetchedQuestions.length).fill('')); // Initialize answers array with empty strings
    }

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setVideoStream(stream);
        setIsWebcamActive(true); // Webcam is now active
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
        setIsWebcamActive(false);
      }
    };

    startVideo();

    return () => {
      if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop());
        setIsWebcamActive(false); // Reset webcam active state
      }
    };
  }, [navigate]);

  const handleStartRecording = () => {
    startSpeechToText();
  };

  const handleStopRecording = () => {
    stopSpeechToText();

    const transcription = results.map((result) => result.transcript).join(' ');

    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[currentQuestionIndex] = transcription || ''; // Save transcription for the current question index
      return updatedAnswers;
    });

    results.splice(0, results.length); // Clear results array
  };

  const handleComplete = async () => {
    setIsSubmitting(true); // Disable the button and change text
    const payload = {
      questions: questions.map((q) => q.question),
      answers,
    };

    try {
      const response = await fetch('https://backend-interview-1.onrender.com/evaluate-answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const results = await response.json();
      if (response.ok) {
        navigate('/interview-results', { state: { results } });
      } else {
        console.error('Evaluation error:', results.error);
      }
    } catch (err) {
      console.error('Error completing interview:', err.message);
    } finally {
      setIsSubmitting(false); // Re-enable button if needed (optional)
    }
  };

  return (
    <Layout title={'Interview Questions'}>
      <div className="container container-int">
        <h1 className="mt-4 text-center-int">Interview Questions</h1>
        <p className="text-center-int">Answer the following question based on your skills and knowledge:</p>

        <div className="d-flex-int mt-4">
          <div className="left-panel-int flex-fill">
            <div className="card shadow-lg question-container-int">
              <div className="card-body-int">
                <h5 className="card-title-int">
                  <strong>Q{currentQuestionIndex + 1}:</strong>{' '}
                  {questions[currentQuestionIndex]?.question || 'Question not found'}
                </h5>
                <p>
                  <span className="badge bg-info text-dark">
                    Type: {questions[currentQuestionIndex]?.type || 'N/A'} | Difficulty:{' '}
                    {questions[currentQuestionIndex]?.difficulty || 'N/A'}
                  </span>
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-secondary btn-forward-int"
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                className="btn btn-primary btn-forward-int"
                onClick={() => setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1))}
                disabled={currentQuestionIndex === questions.length - 1}
              >
                Next
              </button>
            </div>
            <div className="text-center-int mt-4 button-group-int">
              <div className="text-center-int mt-4">
                <button
                  className={`btn ${isRecording ? 'btn-danger blink-int' : 'btn-warning'} btn-record-int`}
                  onClick={isRecording ? handleStopRecording : handleStartRecording}
                >
                  {isRecording ? 'Stop Recording' : 'Start Recording'}
                </button>
              </div>

              {error && (
                <div className="alert alert-danger text-center-int mt-3">
                  Error: {error}
                </div>
              )}

              <div className="mt-3">
                <strong>Answer:</strong> {answers[currentQuestionIndex] || 'No answer recorded yet.'}
              </div>

              {currentQuestionIndex === questions.length - 1 && (
                <div className="text-center-int mt-4 mb-4">
                  <button
                    className="btn btn-success"
                    onClick={handleComplete}
                    disabled={!isWebcamActive || isSubmitting}
                  >
                    {isSubmitting ? 'Please Wait...' : 'Submit Interview'}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="right-panel-int ms-4">
            <div className="camera-container-int">
              <video
                ref={videoRef}
                autoPlay
                muted
                width="320"
                height="200"
                className="webcam-video-int border rounded video-int"
              ></video>
            </div>
          </div>
        </div>

        <div className="container-int question-panel-int mt-4">
          {questions.map((_, index) => (
            <button
              key={index}
              className={`question-number-int ${answers[index] ? 'answered-int' : ''}`}
              onClick={() => setCurrentQuestionIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
}
