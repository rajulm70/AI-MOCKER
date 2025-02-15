import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout/Layout';
import { useAuth } from "../context/auth";
import MockInt from './MockInt';
import MockEssay from './MockEssay';
import MockQuizzy from './MockQuiz';
import './Dashboard.css';
import Working from './Working';
import FocusComponent from './FocusComponent';
import Spinner from '../components/Spinner';

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(true);

  // Create a ref for the dashboard container
  const dashboardRef = useRef(null);

  // Function to scroll to the dashboard section
  const scrollToDashboard = () => {
    if (dashboardRef.current) {
      dashboardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout title={'AI-Mocker'}>
      {loading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <>
          <FocusComponent scrollToDashboard={scrollToDashboard} />
          <div ref={dashboardRef} className="dashboard-container">
            <MockQuizzy />
            <MockEssay />
            <MockInt />
          </div>
          <Working />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
